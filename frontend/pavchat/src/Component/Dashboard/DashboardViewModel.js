import React, { useEffect, useState } from 'react'
import { messages } from './DashboardModel';
import DashboardView from './DashboardView';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export default function DashboardViewModel() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUserName, setSelectedUserName] = useState("");
  const [decodedToken, setdecodedToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      console.log(decoded);
      setdecodedToken(decoded.id);

    }
    else {
      navigate("/auth/login")
    }
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
        setLoading(false);
      }

    }
    getUser();
  }, [decodedToken])
  const openboard = async (fullname) => {
    console.log(fullname)
    setSelectedUserName(fullname);


  }


  const handleSendMessage = async (e, reciver_id, messageText) => {
    console.log(decodedToken, reciver_id, messageText);
    console.log(e.key);
    if (e.key === "Enter") {
      await messages.sendMessage(decodedToken, reciver_id, messageText);
    }
  }
  return (<DashboardView myuser={users} loading={loading} onclick={openboard} selectedUserName={selectedUserName} handleSendMessage={handleSendMessage}></DashboardView>)
}
