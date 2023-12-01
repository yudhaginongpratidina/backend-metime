const express = require("express");
const router = express.Router();

const MusicController = require("../controllers/MusicController");

router.get("/api/musics", MusicController.getMusics);
router.get('/api/musics/:id', MusicController.getMusicById);
router.post('/api/musics', MusicController.createMusic);
router.patch('/api/musics/:id', MusicController.updateMusicById);
router.delete('/api/musics/:id', MusicController.deleteMusicById);

module.exports = router;