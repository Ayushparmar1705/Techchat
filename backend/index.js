const express = require("express");
const cors = require("cors");
const Authroutes = require("./Routes/Authroutes/Authroutes");
const Getuserroutes = require("./Routes/GetuserRoutes/GetuserRoutes");
const Messageroutes = require("./Routes/MessageRoutes/Messageroutes");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", Authroutes);
app.use("/auth", Authroutes);
app.use("/get/", Getuserroutes);
app.use("/send/", Messageroutes);
app.listen(8080);