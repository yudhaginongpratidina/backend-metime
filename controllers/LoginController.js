const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findFirst({ where: { email: email } });
        if (!user) return res.status(404).json({ msg: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Incorrect password" });

        // CEK ROLE
        if (user.role !== "admin") {
            return res.status(403).json({ msg: "Access denied. User is not an admin." });
        }

        return res.status(200).json({ msg: "success", data: user });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}


const loginUser = async (req, res) => {
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
    loginAdmin,
    loginUser
}