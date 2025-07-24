
import React, { useCallback, useEffect, useState } from 'react'
import { messages } from './MessagesModel';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import MessagesView from "./MessagesView";
import socket from "../../Socketconnection/SocketConnection";
import { toast } from "react-toastify"

export default function MessagesViewModel() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUserName, setSelectedUserName] = useState("");
  const [decodedToken, setdecodedToken] = useState(null);

  const [dbmessages, setDbMessages] = useState([]);
  const [reciverId, setReciverId] = useState('');
  const [allUsers, setAllusers] = useState([]);
  const [profiledata, setProfiledata] = useState([]);
  const [openBox, setOpenBox] = useState(true);
  const [onlineUser, setOnlineUser] = useState([]);
  const [messageLoading, setMessageLoading] = useState(false);
  const [openFavourite , setopenFavourites] = useState(false);
  const [fav , setFav] = useState([]);

  useEffect(() => {
    // if socket io don't connected connect it
    if (!socket.connected) {
      socket.connect();
    }
    socket.once("connect", () => {
      console.log("socket is connected = ", socket.id);
    })
  }, []);
  useEffect(() => {
   




    //recive message from the server and set to state

    //get the token from the localstorage
    const token = localStorage.getItem("token");
    // check the token is exists or not
    if (token) {
      const decoded = jwtDecode(token);
      // console.log(decoded);
      setdecodedToken(decoded.id);

      socket.emit("user_connected", decoded.id);


      socket.on("user_update_status", (data) => {
        console.log(data);
        if (decoded) {
          console.log("user data status = ", data);
          setOnlineUser(data);
        }

      })




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


  useEffect(() => {
    //get user from the database
    setLoading(true);
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

  }, [decodedToken])









  useEffect(() => {
    socket.on("recivemessage", (data) => {

      setDbMessages((prev) => [...prev, data])

    })

  }, []);
  const fetchMessage = useCallback(async () => {
    setMessageLoading(true);
    try {
      if (reciverId) {
        const result = await messages.getMessage(decodedToken, reciverId);
        setDbMessages(result.message);
      }
    }
    catch (err) {
      console.log(err)
    } finally {
      setMessageLoading(false)
    }
  }, [reciverId, decodedToken]);

  useEffect(() => {
    fetchMessage();
  }, [fetchMessage]);

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


    if (!socket.connected) {
      socket.connect();
      console.log("socket is connected on user click = ", socket.id);
    }




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
    


      // Emit to other clients
    
      socket.emit("sendmessage", {
        sender_id: decodedToken,
        reciver_id: reciver_id,
        message: messageText,
      });



      fetchMessage()
    }

  };


  const openBoxforUser = () => {
    setOpenBox(!openBox);
  }

  const handleLogout = () => {
    socket.emit("user-offline", decodedToken);
    localStorage.removeItem("token");
    toast("Logout succesfully");
    navigate("/");
  }


  async function showFavList(){
    const list = await messages.showFavouriteList(decodedToken);
    setFav(list);
  }
  useEffect(()=>{
    showFavList();
  },[decodedToken]);
  return (<MessagesView senderId = {decodedToken} myuser={users} loading={loading} onclick={openboard} setSelectedUserName={setSelectedUserName} selectedUserName={selectedUserName} handleSendMessage={handleSendMessage} messageLoading={messageLoading} dbmessages={dbmessages} handlesetName={handlesetName} profiledata={profiledata} openBoxforUser={openBoxforUser} openBox={openBox} onlineUser={onlineUser} handleLogout={handleLogout}openFavourite = {openFavourite} setopenFavourites = {setopenFavourites} fav = {fav}></MessagesView >)
}
