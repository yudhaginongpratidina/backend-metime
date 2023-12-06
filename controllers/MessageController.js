const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getMessages = async (req, res) => {
    try {
        const response = await prisma.message.findMany();
        return res.status(200).json({msg: "Success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}


const createMessage = async (req, res) => {
    try {
        const { userId, message } = req.body;

        const response = await prisma.message.create({
            data: {
                userId: userId,
                message: message
            }
        })

        return res.status(201).json({msg: "Message created successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}




const deleteMessageById = async (req, res) => {
    try {
        const id = req.params.id;
        
        const existingMessage = await prisma.message.findFirst({ where: { id: Number(id) } });
        if (!existingMessage) return res.status(404).json({ msg: 'Message not found' });

        const response  = await prisma.message.delete({ where: { id: Number(id) } })
        return res.status(200).json({msg: "deleted successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}



module.exports = {
    getMessages,
    createMessage,
    deleteMessageById
}