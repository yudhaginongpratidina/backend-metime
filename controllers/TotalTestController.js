const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getTestCount = async (testType) => {
    try {
        const count = await prisma.user.count({
            where: {
                [testType]: {
                    not: 0
                }
            }
        });
        return count;
    } catch (error) {
        throw error;
    }
};

const getTestDepresi = async (req, res) => {
    try {
        const count = await getTestCount('tesdepresi');
        return res.status(200).json({ msg: "success", count });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

const getTestStress = async (req, res) => {
    try {
        const count = await getTestCount('tesstress');
        return res.status(200).json({ msg: "success", count });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

const getTestBunuhDiri = async (req, res) => {
    try {
        const count = await getTestCount('tesbunuhdiri');
        return res.status(200).json({ msg: "success", count });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

const getTestCemas = async (req, res) => {
    try {
        const count = await getTestCount('tescemas');
        return res.status(200).json({ msg: "success", count });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

const getTestKepribadian = async (req, res) => {
    try {
        const count = await getTestCount('teskepribadian');
        return res.status(200).json({ msg: "success", count });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

const getTestBurnout = async (req, res) => {
    try {
        const count = await getTestCount('tesburnout');
        return res.status(200).json({ msg: "success", count });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

module.exports = {
    getTestDepresi,
    getTestStress,
    getTestBunuhDiri,
    getTestCemas,
    getTestKepribadian,
    getTestBurnout
};
