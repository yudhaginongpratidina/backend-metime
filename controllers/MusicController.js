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