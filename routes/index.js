import express from "express";
import { generateQR } from "../controllers/qrController.js"
const router = express.Router();

router.post('/generate', generateQR);

export default router;