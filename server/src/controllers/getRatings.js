import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ratings = async (req, res) => {
    try {
        const { subject_id } = req.query;

        if (!subject_id) {
            return res.status(400).json({ error: "subject_id is required" });
        }

        const subjectRatings = await prisma.ratings.findMany({
            where: {
                subject_id: parseInt(subject_id),
            },
        });
        res.json(subjectRatings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default ratings;