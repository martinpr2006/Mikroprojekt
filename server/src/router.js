import { Router } from "express";
import subjects from "./controllers/getSubjects.js";
import ratings from "./controllers/getRatings.js";
import postRating from "./controllers/postRating.js";

const router = Router();

router.get("/subjects", subjects);
router.get("/ratings", ratings);
router.post("/ratings", postRating);

export default router;