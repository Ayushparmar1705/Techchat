const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Authmodel = require("../../Model/Authmodel/AuthModel");
require("dotenv").config();

const signup = async (req, res) => {
    const userData = req.body;
    console.log(userData["fullname"])
    if(userData["fullname"] === "" || !isNaN(userData["fullname"])){
        return res.status(500).send({ message: "Invalid fullname" });
    }
    else if(userData["email"] === "" || !isNaN((userData["email"]))){
       return res.status(500).send({message : "Invalid email"})
    }
    else if(userData["password"] === "" || !isNaN((userData["password"]))){
        return res.status(500).send({message : "Invalid password"})
    }
    else{
        const newPassword = await bcrypt.hash(userData.password, 5);
        const newData = {
            fullname: userData.fullname,
            email: userData.email,
            password: newPassword,
        }
        Authmodel.signupUser(newData, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send({ message: err });
            }
            else {
                return res.status(200).send({ message: "Account created succesfully..." });
            }
        })
    }
}
const login = async (req, res) => {
    const userData = req.body;
    if(userData["email"] === "" || !isNaN(userData["email"])){
        return res.status(500).send({ message: "Invalid email" });
    }else if(userData["password"] === "" || !isNaN(userData["password"])){
        return res.status(500).send({message : "Invalid password"})
    }
    else {
        Authmodel.findByEmailAndPassword(userData, (err, result) => {
            if (err) {
                return res.status(500).send({message: err});
            } else {
                console.log(result);
                if (result.length > 0) {

                    const password = result[0]["password"];
                    const decryptedPassword = bcrypt.compareSync(userData.password, password);
                    if (!decryptedPassword) {
                        return res.status(401).send({message: "Invalid password"});
                    }
                    const token = jwt.sign({id: result[0].id}, process.env.JWT_SECRET, {expiresIn: "1h"});
                 
                    return res.status(200).send({message: "Login succesfully", token});
                } else {
                    return res.status(200).send({message: "user not found"});
                }
            }
        })
    }
}
module.exports = { signup, login }