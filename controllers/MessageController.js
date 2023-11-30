const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getMessages = async (req, res) => {
    try {
        const response = await prisma.message.findMany();
        return res.status(200).json({msg: "success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}



const getMessageById = async (req, res) => {
    try {
        const response = await prisma.message.findFirst({ where: { id: Number(req.params.id) } });
        if(!response) return res.status(404).json({msg: "Message not found"});
        return res.status(200).json({msg: "Success get message", response});
    } catch (error) {
        console.log(error);
    }
}




const createMessage = async (req, res) => {
    try {
        const { name, email, phone,  message } = req.body;

        const response = await prisma.message.create({
            data: {
                name: name,
                email: email,
                phone: phone,
                message: message
            }
        })

        return res.status(201).json({msg: "message sent successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}




const deleteMessageById = async (req, res) => {
    try {
        const id = req.params.id;

        // CEK DATA
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
    getMessageById,
    createMessage,
    deleteMessageById
}