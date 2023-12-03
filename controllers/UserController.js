const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');


const createUser = async (req, res) => {
    try {
        const { email, password, re_password, role } = req.body;
        const emailExists = await prisma.user.findFirst({ where: { email: email }})

        if (emailExists) return res.status(400).json({msg: `Email: ${email} already exists`});
        if (password !== re_password) return res.status(400).json({msg: "Passwords do not match"});
        const hashedPassword = await bcrypt.hash(password, 10);

        const response = await prisma.user.create({ 
            data: {
                email: email,
                password: hashedPassword,
                role: role
            }
         })

        return res.status(201).json({msg: "Create User Success", data: response});
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
        if(!response) return res.status(404).json({msg: `User with id ${id} not found`});
        return res.status(200).json({msg: "success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});   
    }
}


const getUserByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const response = await prisma.user.findFirst({ where: { email: email }});
        if(!response) return res.status(404).json({msg: `User with email ${email} not found`});
        return res.status(200).json({msg: "success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});   
    }
}


const updateEmailById = async (req, res) => {
    try {
        const id = req.params.id;
        const { email } = req.body;

        const emailExists = await prisma.user.findFirst({ where: { email: email }})
        if (emailExists) return res.status(400).json({msg: `Email: ${email} already exists`});

        const response = await prisma.user.update({
            where: { id: Number(id) },
            data: {
                email: email,
                updatedAt: new Date()
            }
        })

        return res.status(200).json({msg: "Update Email Success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});   
    }
}


const updateNameById = async (req, res) => {
    try {
        const id = req.params.id;
        const { name } = req.body;

        const response = await prisma.user.update({
            where: { id: Number(id) },
            data: {
                name: name,
                updatedAt: new Date()
            }
        })

        return res.status(200).json({msg: "Update Name successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}



const updatePasswordById = async (req, res) => {
    try {
        const id = req.params.id;
        const { password, re_password } = req.body;

        if (password !== re_password) return res.status(400).json({msg: "Passwords do not match"});
        const hashedPassword = await bcrypt.hash(password, 10);

        const response = await prisma.user.update({
            where: { id: Number(id) },
            data: {
                password: hashedPassword,
                updatedAt: new Date()
            }
        })

        return res.status(200).json({msg: "Update Password successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}



const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const exist = await prisma.user.findFirst({ where: { id: Number(id) }});
        if (!exist) return res.status(404).json({ msg: 'User not found' });
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
    getUserByEmail,

    updateEmailById,
    updateNameById,
    updatePasswordById,

    deleteUserById
}
