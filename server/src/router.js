import { Router } from "express";
import subjects from "./controllers/getSubjects.js";

const router = Router();

router.get("/subjects", subjects);

export default router;