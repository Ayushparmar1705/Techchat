const express = require("express");
const cors = require("cors");
const Authroutes = require("./Routes/Authroutes/Authroutes");
const Getuserroutes = require("./Routes/GetuserRoutes/GetuserRoutes");
const Messageroutes = require("./Routes/MessageRoutes/Messageroutes");
const Profileroutes = require("./Routes/ProfileRoutes/ProfileRoutes");
const socketio = require("socket.io");
const http = require("http");
const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        method: ["GET", "POST"],
        credential : true,
    },
    transports: ["websocket"],
});
const onlineUser = {};
//create the connection for the client. when client is connected a socket object is created for the client and you can send and recive message
io.on("connection", (socket) => {


    // console.log("client connected",socket.id);
    // get the message for the client
    // When client send the message to the server below callback execute
    socket.on("sendmessage", (data) => {

        //send the message to all the connected clients including the sender
        io.emit("recivemessage", {
            sender_id: data.sender_id,
            message: data.message,
        });



    })
    //disconnect the client
    socket.on("disconnect", () => {
        console.log("disconnected user id", socket.id);
    });

})
app.use("/auth", Authroutes);
app.use("/get/", Getuserroutes);
app.use("/messages/", Messageroutes);
app.use("/user-profile",Profileroutes);
server.listen(8080,'0.0.0.0',()=>{
    console.log("server is running")
});