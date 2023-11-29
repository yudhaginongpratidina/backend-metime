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

module.exports = {
    getMusics
}