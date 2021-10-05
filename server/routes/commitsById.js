import express from "express";

import { createCommitsId } from "../Contollers/commitsById.js";
const router = express.Router();

router.post("/" , createCommitsId)

export default router;