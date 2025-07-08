
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
    if (!socket.connected) {
      socket.connect();
    }
    socket.on("recivemessage", (data) => {

      setGetMessage((prev) => [...prev, data])
    })

    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      console.log(decoded);
      setdecodedToken(decoded.id);

    }
    else {
      navigate("/auth/login")
    }
    return () => {
      socket.disconnect()
      socket.off("recivemessage");
      socket.off("sendmessage")
    };

  }, [navigate])
  useEffect(() => {
    const getUser = async () => {

      try {
        if (!decodedToken) { return }
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
  }, [decodedToken])
  const openboard = async (fullname, id) => {
    setSelectedUserName(fullname);
    setReciverId(id);




  }
  useEffect(() => {
    const fetchMessage = async () => {
      const result = await messages.getMessage(decodedToken, reciverId);
      setDbMessages(result.message);

    }
    fetchMessage();
  }, [decodedToken, reciverId]);
  useEffect(() => {
    console.log('fetched from database messages = ', dbmessages);
  }, [decodedToken, reciverId, dbmessages])

  const handleSendMessage = async (e, reciver_id, messageText) => {
    if (e.key === "Enter" && messageText.trim() !== "") {
      await messages.sendMessage(decodedToken, reciver_id, messageText);

      // send the message to the server
      socket.emit("sendmessage", { sender_id: decodedToken, reciverId: reciver_id, message: messageText });


      socket.on("recivemessage", (data) => {
        console.log("recive from server = ", data);
      })
      return () => { socket.disconnect() };
    }

  }


  return (<MessagesView myuser={users} loading={loading} onclick={openboard} selectedUserName={selectedUserName} handleSendMessage={handleSendMessage} getMesage={getMessage} dbmessages={dbmessages}></MessagesView>)
}
