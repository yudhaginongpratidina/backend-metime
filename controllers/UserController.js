const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');


const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, re_password } = req.body;

        const emailExists = await prisma.user.findFirst({ where: { email: email }})
        if (emailExists) return res.status(400).json({msg: `Email: ${email} already exists`});

        if (password !== re_password) return res.status(400).json({msg: "Passwords do not match"});
        const hashedPassword = await bcrypt.hash(password, 10);

        // Menggunakan waktu saat ini sebagai seed untuk mendapatkan karakter kartun acak
        const seed = Date.now();
        const characterResponse = await fetch(`https://robohash.org/${seed}.png`);
        const characterUrl = characterResponse.url;

        const response = await prisma.user.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashedPassword,
                image: characterUrl
            }
        });

        return res.status(201).json({msg: "User created successfully", data: response});
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({msg: "Internal Server Error"});
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




const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;

        const { 
            firstName, 
            lastName, 
            email, 
            password,
            
            tesdepresi,
            tesstress,
            tesbunuhdiri,
            tescemas,
            teskepribadian,
            tesburnout
        } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const response = await prisma.user.update({
            where: { id: Number(id) },
            data: {
                firstName       : firstName,
                lastName        : lastName,
                email           : email,
                password        : hashedPassword,
                tesdepresi      : tesdepresi,
                tesstress       : tesstress,
                tesbunuhdiri    : tesbunuhdiri,
                tescemas        : tescemas,
                teskepribadian  : teskepribadian,
                tesburnout      : tesburnout
            }
        })

        return res.status(200).json({msg: "Update Name successfully", data: response});
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({msg: "Internal Server Error"});
    }
}


const updateUserTestById = async (req, res) => {
    try {
        const id = req.params.id;

        const { 
            tesdepresi,
            tesstress,
            tesbunuhdiri,
            tescemas,
            teskepribadian,
            tesburnout
        } = req.body;


        const response = await prisma.user.update({
            where: { id: Number(id) },
            data: {
                tesdepresi      : tesdepresi,
                tesstress       : tesstress,
                tesbunuhdiri    : tesbunuhdiri,
                tescemas        : tescemas,
                teskepribadian  : teskepribadian,
                tesburnout      : tesburnout
            }
        })

        return res.status(200).json({msg: "Update Name successfully", data: response});
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({msg: "Internal Server Error"});
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
        console.error('Error deleting user:', error);
        res.status(500).json({msg: "Internal Server Error"});
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findFirst({ where: { email: email } });
        if (!user) return res.status(404).json({ msg: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Incorrect password" });

        return res.status(200).json({ msg: "success", data: user });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}


module.exports = {
    createUser,
    
    getUsers,
    getUserById,

    updateUserTestById,
    updateUserById,
    deleteUserById,
    login
}
