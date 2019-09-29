import healthRouter from "./healthRouter"
import express from "express"

const router = express.Router()

router.use("/health", healthRouter)

export default router
