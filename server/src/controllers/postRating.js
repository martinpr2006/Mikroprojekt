import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const postRating = async (req, res) => {
    try {
        const { subject_id, rating, comment } = req.body;

        if (!subject_id || !rating) {
            return res.status(400).json({ error: "subject_id and rating are required" });
        }

        if (rating < 1 || rating > 5) {
            return res.status(400).json({ error: "rating must be between 1 and 5" });
        }

        const newRating = await prisma.ratings.create({
            data: {
                subject_id: parseInt(subject_id),
                rating: parseFloat(rating),
                comment: comment || null,
            },
        });

        res.status(201).json(newRating);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default postRating;
