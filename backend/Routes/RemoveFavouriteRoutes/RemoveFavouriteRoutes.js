const express = require("express");
const router = express.Router();
const RemoveFavouriteController = require("../../Controller/RemoveFavouriteController/RemoveFavouriteController");
router.get("/favourite/:fav_per_id",RemoveFavouriteController);

module.exports = router;