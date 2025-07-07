const { getUser } = require("../../Model/Getusermodel/GetuserModel");
const dashboard = (req, res) => {
    const { token } = req.params;
    // console.log(token);
    getUser(token, (err, result) => {
        if (err) {
            return res.status(401).send({ message: err });
        } else {
            // console.log("result = ",result);
            return res.status(200).send({ message: result });
        }
    })
}


module.exports = dashboard;