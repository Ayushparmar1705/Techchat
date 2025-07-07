const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Authmodel = require("../../Model/Authmodel/AuthModel");
require("dotenv").config();

const signup = async (req, res) => {
    const userData = req.body;
    const newPassword = await bcrypt.hash(userData.password, 5);
    const newData = {
        fullname: userData.fullname,
        email: userData.email,
        password: newPassword,
    }
    Authmodel.signupUser(newData, (err, result) => {
        if (err) {
            return res.status(500).send({ message: err });
        }
        else {
            return res.status(200).send({ message: result });
        }
    })
}
const login = async (req, res) => {
    const userData = req.body;
    Authmodel.findByEmailAndPassword(userData, (err, result) => {
        if (err) {
            return res.status(500).send({ message: err });
        } else {
            const password = result[0]["password"];
            const decryptedPassword = bcrypt.compareSync(userData.password, password);
            if (!decryptedPassword) {
                return res.status(401).send({ message: "Invalid password" });
            }
            const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, { expiresIn: "1h" });
            return res.status(200).send({message : "Login succesfully", token});
        }
    })
}
module.exports = { signup, login }