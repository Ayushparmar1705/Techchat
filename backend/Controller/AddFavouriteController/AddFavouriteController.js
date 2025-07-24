const Add_Favourite = require("../../Model/AddFavourite/AddFavourite")


const AddFavourite = async (req, res) => {
    const userData = req.body;
    Add_Favourite(userData, (err, result) => {
        if (err) {
            return res.status(500).send({ message: err });
        } else {
            return res.status(200).send({ message: result });
        }
    })
}


module.exports = { AddFavourite }