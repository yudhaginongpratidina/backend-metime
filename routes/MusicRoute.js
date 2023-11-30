const express = require("express");
const router = express.Router();

const UploadMusic = require("../middleware/music");
const MusicController = require("../controllers/MusicController");

router.get("/api/musics", MusicController.getMusics);
router.get('/api/musics/:id', MusicController.getMusicById);
router.post('/api/musics', UploadMusic.single('music'), MusicController.uploadMusic);
router.patch('/api/musics/:id', UploadMusic.single('music'), MusicController.updateMusicById);
router.delete('/api/musics/:id', MusicController.deleteMusicById);

module.exports = router;