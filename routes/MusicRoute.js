const express = require("express");
const router = express.Router();

const MusicController = require("../controllers/MusicController");

router.get("/api/musics", MusicController.getMusics);

module.exports = router;