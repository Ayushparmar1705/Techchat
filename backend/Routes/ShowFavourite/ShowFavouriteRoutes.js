const ShowFavourite = require("../../Controller/ShowFavourite/ShowFavouriteController");

const express = require("express");
const router = express.Router();
router.get("/favourites/:user_id",ShowFavourite);
module.exports = router;