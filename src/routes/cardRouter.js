import express from "express"
import HttpError from "../middlewares/HttpError"
import * as cardService from "../services/cardService"
const router = express.Router()

router.get("/workers", async function(req, res) {
  try {
    const workers = await cardService.importWorkers()
    res.json(workers)
  } catch (e) {
    throw new HttpError(500, "Can't read workers cards.")
  }
})

router.get("/buildings", async function(req, res) {
  try {
    const buildings = await cardService.importBuildings()
    res.json(buildings)
  } catch (e) {
    throw new HttpError(500, "Can't read buildings cards.")
  }
})

export default router
