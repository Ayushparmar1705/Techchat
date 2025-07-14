
import React, { useEffect, useRef, useState } from 'react'
import { messages } from './MessagesModel';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import MessagesView from "./MessagesView";
import socket from "../../Socketconnection/SocketConnection";

export default function MessagesViewModel() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUserName, setSelectedUserName] = useState("");
  const [decodedToken, setdecodedToken] = useState(null);
  const [getMessage, setGetMessage] = useState([]);
  const [dbmessages, setDbMessages] = useState([]);
  const [reciverId, setReciverId] = useState('');
  const [allUsers, setAllusers] = useState([]);
  const [profiledata, setProfiledata] = useState([]);
  const [openBox, setOpenBox] = useState(true);


  useEffect(() => {
    // if socket io don't connected connect it
    if (!socket.connected) {
      socket.connect();
    }




    //recive message from the server and set to state
    socket.on("recivemessage", (data) => {

      setGetMessage((prev) => [...prev, data])    })
    //get the token from the localstorage
    const token = localStorage.getItem("token");
    // check the token is exists or not
    if (token) {
      const decoded = jwtDecode(token);
      // console.log(decoded);
      setdecodedToken(decoded.id);


    }


    else {
      navigate("/auth/login")
    }

    //off the recive message and send messag


    return () => {

      socket.off("recivemessage");
      socket.off("sendmessage")

    };

  }, [navigate])


useEffect(()=>{
     //get user from the database
    const getUser = async () => {
      try {
        //check token is exists or not if not exists return
        if (!decodedToken) { return }
        //get message
        const result = await messages.getUsers(decodedToken);

        setUsers(result);
        setAllusers(result);

      }
      catch (err) {
        console.log(err);
      } finally {

  setLoading(false);
      


      }

    }
    getUser();

},[decodedToken])


 

  



      const fetchMessage = async () => {
        if (reciverId) {
          const result = await messages.getMessage(decodedToken, reciverId);

          setDbMessages(result.message)
        }

      }
 
      useEffect(()=>{
        fetchMessage();
      });
  useEffect(() => {
    async function getProfile() {
      if (decodedToken) {
        const result = await messages.Userprofile(decodedToken)
        setProfiledata(result);
      }
    }
    getProfile()
    
  }, [decodedToken]);
  //write logic for open board
  const openboard = async (fullname, id) => {
    setSelectedUserName(fullname);
    setReciverId(id);




  }


  const handlesetName = (e) => {
    const name = e.target.value;
    // console.log(name.length);
    if (name.length > 0) {
      const myresult = users.filter((data) => {

        if (data.fullname.includes(name)) {

          if (typeof data === 'object') {
            return Object.keys(data);


          }
        }
        return 0;
      })
      setUsers(myresult);
    } else {
      setUsers(allUsers);
    }


  }
const handleSendMessage = async (e, reciver_id, messageText) => {
  if (e.key === "Enter" && messageText.trim() !== "") {
    // Save message to backend
    const result = await messages.sendMessage(decodedToken, reciver_id, messageText);
    console.log("updated = ",result);
  
      
      // Emit to other clients
      socket.emit("sendmessage", {
        sender_id: decodedToken,
        reciverId: reciver_id,
        message: messageText,
      });
  }
};


  const openBoxforUser = () => {
    setOpenBox(!openBox);
  }


  return (<MessagesView myuser={users} loading={loading} onclick={openboard} setSelectedUserName={setSelectedUserName} selectedUserName={selectedUserName} handleSendMessage={handleSendMessage} getMesage={getMessage} dbmessages={dbmessages} handlesetName={handlesetName} profiledata={profiledata} openBoxforUser={openBoxforUser} openBox={openBox}></MessagesView >)
}
