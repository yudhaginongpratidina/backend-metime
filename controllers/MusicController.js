const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getMusics = async (req, res) => {
    try {
        const response = await prisma.music.findMany();
        return res.status(200).json({msg: "success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const getMusicById = async (req, res) => {
    try {
        const response = await prisma.music.findFirst({ where: { id: Number(req.params.id) } });
        if(!response) return res.status(404).json({msg: "Music not found"});
        return res.status(200).json({msg: "Success get music", response});
    } catch (error) {
        console.log(error);
    }
}

const createMusic = async (req, res) => {
    try {
        const { title, url } = req.body;
        const response = await prisma.music.create({ data: { title: title, url: url}})
        return res.status(201).json({msg: "Music created successfully", response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const updateMusicById = async (req, res) => {
    try {
        const { title, url } = req.body;

        const response = await prisma.music.update({
            where: { id: Number(req.params.id) },
            data: { title: title, url: url, updatedAt: new Date()}
        })

        return res.status(200).json({msg: "updated successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}


const deleteMusicById = async (req, res) => {
    try {
        const response  = await prisma.music.delete({ where: { id: Number(req.params.id) } })
        return res.status(200).json({msg: "deleted successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}


module.exports = {
    getMusics,
    getMusicById,
    createMusic,
    updateMusicById,
    deleteMusicById
}



// const path = require('path');
// const fsPromises = require('fs').promises;

// const uploadMusic = async (req, res) => {
//     let finalMusicURL = req.protocol + '://' + req.get('host') + '/music/' + req.file.filename;
//     const { title } = req.body;

//     // CEK EKTENSI FILE
//     const fileName = req.file.filename;
//     const fileExtension = path.extname(fileName).toLowerCase();

//     if (fileExtension !== '.mp3') return res.status(400).json({ msg: "Only .mp3 files are allowed" });

//     // CEK DATA MUSIC
//     const fileMusicURLExists = await prisma.music.findFirst({ where: { url: finalMusicURL } })
//     if(fileMusicURLExists) return res.status(409).json({msg: "File already exists"});

//     // UPLOAD MUSIC
//     try {
//         const response = await prisma.music.create({ data : {
//             title: title,
//             url: finalMusicURL
//         }});
//         return res.status(201).json({msg : "File uploaded successfully", response});
//     } catch (error) {
//         return res.status(500).json({msg: error.message});
//     }

// }

// const updateMusicById = async (req, res) => {
//     try {

//         // TANGKAP ID, TITLE, DAN ARTIST
//         const id = Number(req.params.id);
//         const { title } = req.body;
        
//         // CEK DATA
//         const existingMusic = await prisma.music.findFirst({ where: { id: id } });
//         if (!existingMusic) return res.status(404).json({ msg: 'Music not found' });

//         // TANGKAP URL MUSIC YANG DIKIRIMKAN DARI MIDLLEEWARE
//         const finalMusicURL = req.protocol + '://' + req.get('host') + '/music/' + req.file.filename;

//         // DAPATKAN NAMA FILE
//         const fileName = req.file.filename;

//         // CEK EKTENSI FILE (FILE HARUS MP3)
//         const fileExtension = path.extname(fileName).toLowerCase();
//         if (fileExtension !== '.mp3') return res.status(400).json({ msg: 'Only .mp3 files are allowed' });

//         // FILE EXIST
//         const fileExist = await prisma.music.findFirst({ where: { url: finalMusicURL } })
//         if (fileExist) return res.status(409).json({ msg: 'File already exists' });

//         // TIMPA FILE MUSIC DENGAN CARA HAPUS FILE MUSIC SEBELUMNYA
//         const oldFileName = existingMusic.url.split('/music/')[1];
//         const oldFilePath = path.join(process.cwd(), 'public', 'music', oldFileName);
//         await fsPromises.unlink(oldFilePath);

//         // UPDATE DATA MUSIC DI DATABASE DENGAN URL BARU BERDASARKAN ID
//         const response = await prisma.music.update({
//             where: { id: id},
//             data: {
//                 title: title,
//                 url: finalMusicURL
//             }
//         });
        
//         return res.status(200).json({ msg: 'Music updated successfully', response });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ msg: 'Internal Server Error' });
//     }
// }


// const deleteMusicById = async (req, res) => {
//     try {

//         // AMBIL DATA MUSIC DI DATABASE BERDASARKAN ID
//         const response = await prisma.music.findFirst({ where: { id: Number (req.params.id)}});

//         // MUSIC TIDAK DITEMUKAN
//         if (!response) return res.status(404).json({ msg: 'Music not found' });

//         // GET NAMA FILE SETELAH /MUSIC/
//         const fileName = response.url.split('/music/')[1];

//         // SET FILE PATH
//         const filePath = path.join(process.cwd(), 'public', 'music', fileName);

//         // HAPUS FILE BERDASARKAN PATH YANG TELAH DIDAPAT
//         await fsPromises.unlink(filePath);

//         // HAPUS DATA MUSIC ATAU RECORD DI DATABASE
//         await prisma.music.delete({ where: { id: Number (req.params.id)}});

//         return res.status(200).json({ msg: 'Music deleted successfully', response })

//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ msg: 'Internal Server Error' });
//     }
// }

