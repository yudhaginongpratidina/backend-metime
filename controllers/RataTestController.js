const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getRataTest = async (testType) => {
    try {
        const rataTest = await prisma.user.aggregate({
            _avg: {
                [testType]: true
            }
        });
        return rataTest;
    } catch (error) {
        throw error;
    }
}

const getRataTestDepresi = async (req, res) => {
    try {
        return res.json(await getRataTest('tesdepresi'));
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

const getRataTestCemas = async (req, res) => {
    try {
        return res.json(await getRataTest('tescemas'));
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

const getRataTestStress = async (req, res) => {
    try {
        return res.json(await getRataTest('tesstress'));
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

const getRataTestBunuhDiri = async (req, res) => {
    try {
        return res.json(await getRataTest('tesbunuhdiri'));
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

const getRataTestKepribadian = async (req, res) => {
    try {
        return res.json(await getRataTest('teskepribadian'));
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

const getRataTestBurnout = async (req, res) => {
    try {
        return res.json(await getRataTest('tesburnout'));
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

module.exports = {
    getRataTest,
    getRataTestDepresi,
    getRataTestCemas,
    getRataTestStress,
    getRataTestBunuhDiri,
    getRataTestKepribadian,
    getRataTestBurnout

}