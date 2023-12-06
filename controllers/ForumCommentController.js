const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createForumComment = async (req, res) => {
    try {
        const {forumDiskusiId, comment} = req.body;

        const response = await prisma.forumComment.create({
            data: {
                forumDiskusiId: forumDiskusiId,
                comment: comment
            }
        })

        return res.status(201).json({msg: "Forum comment created successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}


const getForumCommentByForumId = async (req, res) => {
    try {
        const {forumDiskusiId} = req.params;

        const response = await prisma.forumComment.findMany({
            where: {
                forumDiskusiId: Number(forumDiskusiId)
            }
        })

        return res.status(200).json({msg: "Success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}


const deleteForumCommentById = async (req, res) => {
    try {
        const id = req.params.id;
        const response  = await prisma.forumComment.delete({ where: { id: Number(id) } })
        return res.status(200).json({msg: "deleted successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

module.exports = {
    createForumComment,
    getForumCommentByForumId,
    deleteForumCommentById
}