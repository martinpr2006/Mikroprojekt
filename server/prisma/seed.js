import { PrismaClient } from "@prisma/client";
import seedData from "./seedData.js";

const prisma = new PrismaClient();

async function main() {
    await prisma.subjects.createMany({
        data: seedData.map(item => ({
            subject: item.subject,
            teacher: item.teacher,
        })),
    });
    console.log("Database seeded successfully!");
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());