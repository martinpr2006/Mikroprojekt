import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const subjects = async (req, res) => {
    try {
        const subjects = await prisma.subjects.findMany();
        res.json(subjects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default subjects;