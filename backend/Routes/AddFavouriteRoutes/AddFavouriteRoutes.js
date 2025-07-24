const {AddFavourite} = require("../../Controller/AddFavouriteController/AddFavouriteController");
const express = require("express");
const router = express.Router();

router.post("/favourite",AddFavourite);

module.exports = router;