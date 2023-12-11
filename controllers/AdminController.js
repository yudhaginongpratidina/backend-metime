const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

const getAdmin = async (req, res) => {
    try {
        const response = await prisma.admin.findMany();
        return res.status(200).json({msg: "Success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}


const createAdmin = async (req, res) => {
    try {
        const { username, password, re_password } = req.body;

        const usernameExists = await prisma.admin.findFirst({ where: { username: username }})
        if (usernameExists) return res.status(400).json({msg: `Username: ${username} already exists`});

        if (password !== re_password) return res.status(400).json({msg: "Passwords do not match"});
        const hashedPassword = await bcrypt.hash(password, 10);

        const response = await prisma.admin.create({
            data: {
                username: username,
                password: hashedPassword
            }
        })

        return res.status(201).json({msg: "Admin created successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}


const getAdminById = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await prisma.admin.findFirst({ where: { id: Number(id) }});
        if(!response) return res.status(404).json({msg: `Admin with id ${id} not found`});
        return res.status(200).json({msg: "success", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});   
    }
}


const updateAdminById = async (req, res) => {
    try {
        const id = req.params.id;
        const exist = await prisma.admin.findFirst({ where: { id: Number(id) }});
        if (!exist) return res.status(404).json({ msg: 'Admin not found' });

        const { username, password, re_password } = req.body;

        const usernameExists = await prisma.admin.findFirst({ where: { username: username }})
        if (usernameExists) return res.status(400).json({msg: `Username: ${username} already exists`});

        if (password !== re_password) return res.status(400).json({msg: "Passwords do not match"});
        const hashedPassword = await bcrypt.hash(password, 10);

        const response = await prisma.admin.update({
            where: { id: Number(id) },
            data: {
                username: username,
                password: hashedPassword
            }
        })

        return res.status(200).json({msg: "Admin updated successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});   
    }
}



const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await prisma.admin.findFirst({ where: { username: username } });
        if (!admin) return res.status(404).json({ msg: "Admin not found" });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ msg: "Incorrect password" });

        return res.status(200).json({ msg: "success", data: admin });
    } catch (error) {
        return res.status(500).json({ msg: error.message });   
    }
}



const deleteAdminById = async (req, res) => {
    try {
        const id = req.params.id;
        const exist = await prisma.admin.findFirst({ where: { id: Number(id) }});
        if (!exist) return res.status(404).json({ msg: 'Admin not found' });
        const response  = await prisma.admin.delete({ where: { id: Number(id) } })
        return res.status(200).json({msg: "deleted successfully", data: response});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

module.exports = {
    getAdmin,
    createAdmin,
    getAdminById,
    updateAdminById,
    login,
    deleteAdminById
}