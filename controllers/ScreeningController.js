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


const getScreeningByName = async (req, res) => {
    try {
        const name = req.params.name;
        const response = await prisma.screening.findFirst({ where: { name: name }});
        return res.status(200).json({msg: "success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}


const createScreening = async (req, res) => {
    try {
        const { 
            name, 
            tesdepresi,
            tesstress,
            tesbunuhdiri,
            tescemas,
            teskepribadian,
            tesburnout 
        } = req.body;

        const response = await prisma.screening.create({
            data: {
                name: name,
                tesdepresi: tesdepresi,
                tesstress: tesstress,
                tesbunuhdiri: tesbunuhdiri,
                tescemas: tescemas,
                teskepribadian: teskepribadian,
                tesburnout: tesburnout
            }
        })

        return res.status(201).json({msg: "success created", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}


const updateScreeningById = async (req, res) => {
    try {
        const id = req.params.id;
        const { 
            name, 
            tesdepresi,
            tesstress,
            tesbunuhdiri,
            tescemas,
            teskepribadian,
            tesburnout 
        } = req.body;

        const response = await prisma.screening.update({
            where: { id : Number(id) },
            data: {
                name: name,
                tesdepresi: tesdepresi,
                tesstress: tesstress,
                tesbunuhdiri: tesbunuhdiri,
                tescemas: tescemas,
                teskepribadian: teskepribadian,
                tesburnout: tesburnout,
                updatedAt: new Date()
            }
        })

        return res.status(200).json({msg: "Update Name successfully", data: response});
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
    getScreeningByName,
    createScreening,
    updateScreeningById,
    deleteScreeningById
}