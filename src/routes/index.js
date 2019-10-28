import healthRouter from "./healthRouter"
import cardRouter from "./cardRouter"
import gameRouter from "./gameRouter"
import express from "express"

const router = express.Router()

router.use("/health", healthRouter)
router.use("/cards", cardRouter)
router.use("/games", gameRouter)

export default router
