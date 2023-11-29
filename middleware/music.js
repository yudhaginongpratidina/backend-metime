const multer = require('multer');
const path = require('path');

const musicStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/music");
    },
    filename: (req, file, cb) => {
        const originalName = file.originalname;
        const sanitizedFileName = originalName.replace(/\s+/g, '_');
        const finalFileName = `${path.parse(sanitizedFileName).name}${path.extname(sanitizedFileName)}`;
        cb(null, finalFileName);
    },
    fileFilter: (req, file, cb) => {
        const allowedExtensions = ['.mp3'];
        const fileExtension = path.extname(file.originalname).toLowerCase();
        if (!allowedExtensions.includes(fileExtension)) {
            return cb(new Error('Only .mp3 files are allowed'));
        }
        cb(null, true);
    }
});

const uploadMusic = multer({ storage: musicStorage });

module.exports = uploadMusic;