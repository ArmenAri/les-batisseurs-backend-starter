import healthRouter from "./healthRouter"
import cardRouter from "./cardRouter"
import express from "express"

const router = express.Router()

router.use("/health", healthRouter)
router.use("/cards", cardRouter)

export default router
