const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getForum = async (req, res) => {
    try {
        const response = await prisma.forumDiskusi.findMany();
        return res.status(200).json({msg: "Success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}


const getForumById = async (req, res) => {
    try {
        const response = await prisma.forumDiskusi.findFirst({ where: { id: Number(req.params.id) } });
        if(!response) return res.status(404).json({msg: "Forum not found"});
        return res.status(200).json({msg: "Success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}


const createForum = async (req, res) => {
    try {
        const {userId, title, text} = req.body;

        const response = await prisma.forumDiskusi.create({
            data: {
                userId: userId,
                title: title,
                text: text
            }
        })

        return res.status(201).json({msg: "Forum created successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const deleteForumById = async (req, res) => {
    try {
        const id = req.params.id;
        const exist = await prisma.forumDiskusi.findFirst({ where: { id: Number(id) }});
        if (!exist) return res.status(404).json({ msg: 'Forum not found' });

        const response  = await prisma.forumDiskusi.delete({ where: { id: Number(id) } })
        return res.status(200).json({msg: "deleted successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

module.exports = {
    getForum,
    getForumById,
    createForum,
    deleteForumById
}