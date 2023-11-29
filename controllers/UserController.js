const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    try {
        const { name, email, password, re_password, role } = req.body;
        const emailExists = await prisma.user.findFirst({ where: { email: email }})

        if (emailExists) return res.status(400).json({msg: "Email already exists"});
        if (password !== re_password) return res.status(400).json({msg: "Passwords do not match"});
        const hashedPassword = await bcrypt.hash(password, 10);

        const response = await prisma.user.create({ 
            data: {
                name: name,
                email: email,
                password: hashedPassword,
                role: role
            }
         })

        return res.status(201).json({msg: "success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const getUsers = async (req, res) => {
    try {
        const response = await prisma.user.findMany();
        return res.status(200).json({msg: "success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await prisma.user.findFirst({ where: { id: Number(id) }});
        return res.status(200).json({msg: "success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});   
    }
}


const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, password, re_password, role } = req.body;

        if (password !== re_password) return res.status(400).json({msg: "Passwords do not match"});

        const hashedPassword = await bcrypt.hash(password, 10);
        const response = await prisma.user.update({
            where: { id: Number(id) },
            data: {
                name: name,
                email: email,
                password: hashedPassword,
                role: role,
                updatedAt: new Date()
            }
        })

        return res.status(200).json({msg: "updated successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});  
    }
}


const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const response  = await prisma.user.delete({ where: { id: Number(id) } })
        return res.status(200).json({msg: "deleted successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById
}
