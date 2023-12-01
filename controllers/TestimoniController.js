const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getTestimoni = async (req, res) => {
    try {
        const response = await prisma.testimoni.findMany();
        return res.status(200).json({msg: "success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const getTestimoniById = async (req, res) => {
    try {
        const response = await prisma.testimoni.findFirst({ where: { id: Number(req.params.id) } });
        if(!response) return res.status(404).json({msg: "Testimoni not found"});
        return res.status(200).json({msg: "Success get testimoni", response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const createTestimoni = async (req, res) => {
    try {
        const { name, rating, message } = req.body;
        const response = await prisma.testimoni.create({ data: { name: name, rating: rating, message: message}})
        return res.status(201).json({msg: "Testimoni created successfully", response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const deleteTestimoniById = async (req, res) => {
    try {
        const response  = await prisma.testimoni.delete({ where: { id: Number(req.params.id) } })
        return res.status(200).json({msg: "deleted successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}


module.exports = {
    getTestimoni,
    getTestimoniById,
    createTestimoni,
    deleteTestimoniById
}