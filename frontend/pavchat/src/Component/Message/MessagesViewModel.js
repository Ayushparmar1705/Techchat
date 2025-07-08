
import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    // if socket io don't connected connect it
    if (!socket.connected) {
      socket.connect();
    }

    //recive message from the server and set to state
    socket.on("recivemessage", (data) => {

      setGetMessage((prev) => [...prev, data])
    })
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
    //off the recive message and send message
    return () => {

      socket.off("recivemessage");
      socket.off("sendmessage")
    };

  }, [navigate])



  useEffect(() => {
    //get user from the database
    const getUser = async () => {

      try {
        //check token is exists or not if not exists return
        if (!decodedToken) { return }
        //get message
        const result = await messages.getUsers(decodedToken);

        setUsers(result);

      }
      catch (err) {
        console.log(err);
      } finally {
        setInterval(() => {
          setLoading(false);
        }, 5000);
      }

    }
    getUser();

    const fetchMessage = async () => {
      if (reciverId) {
        const result = await messages.getMessage(decodedToken, reciverId);
        setDbMessages(result.message);
      }

    }
    fetchMessage();
  }, [decodedToken, reciverId])
  //write logic for open board
  const openboard = async (fullname, id) => {
    setSelectedUserName(fullname);
    setReciverId(id);




  }

  const handleSendMessage = async (e, reciver_id, messageText) => {
    // write logic when i send the message on enter event
    if (e.key === "Enter" && messageText.trim() !== "") {
      await messages.sendMessage(decodedToken, reciver_id, messageText);

      // send the message to the server
      socket.emit("sendmessage", { sender_id: decodedToken, reciverId: reciver_id, message: messageText });



      return () => { socket.disconnect() };
    }

  }


  return (<MessagesView myuser={users} loading={loading} onclick={openboard} selectedUserName={selectedUserName} handleSendMessage={handleSendMessage} getMesage={getMessage} dbmessages={dbmessages}></MessagesView>)
}
