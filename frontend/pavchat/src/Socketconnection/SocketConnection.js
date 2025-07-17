import { io } from "socket.io-client";
const socket = io("http://localhost:8080", {
    transports: ["websocket", "polling"],//Ensures proper connection
    withCredentials: true,//send cookies and session for user tracking
    autoConnect: false,//let's you connect after login
});


export default socket;