const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getScreenings = async (req, res) => {
    try {
        const response = await prisma.screening.findMany();
        return res.status(200).json({msg: "success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const getLast_Screenings_ByName_With_Screening = async (req, res) => {
    try {
        const { name, screening } = req.params;

        const response = await prisma.screening.findFirst({
            where: {
                name: name,
                screening: screening
            },
            orderBy: {
                id: 'desc'
            }
        })

        return res.status(200).json({msg: "success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const createScreening = async (req, res) => {
    try {
        const { screening, name, score, hasil } = req.body;

        const response = await prisma.screening.create({
            data: {
                screening: screening,
                name: name,
                score: score,
                hasil: hasil
            }
        })

        return res.status(201).json({msg: "success created", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}


const deleteScreeningById = async (req, res) => {
    try {
        const id = req.params.id;

        const exist = await prisma.screening.findFirst({ where: { id: Number(id) } });
        if (!exist) return res.status(404).json({ msg: 'Screening not found' });

        const response  = await prisma.screening.delete({ where: { id: Number(id) } })
        return res.status(200).json({msg: "deleted successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

module.exports = {
    getScreenings,
    getLast_Screenings_ByName_With_Screening,
    createScreening,
    deleteScreeningById
}