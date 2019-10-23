import express from "express"
import HttpError from "../middlewares/HttpError"
import * as cardService from "../services/cardService"

const router = express.Router()

// routes
router.get("/workers", function(req, res) {
  try {
    cardService.importWorkers().then(workers => {
      res.json(workers)
    })
  } catch (e) {
    throw new HttpError(500, "Can't read workers cards.")
  }
})

router.get("/buildings", function(req, res) {
  try {
    cardService.importBuildings().then(buildings => {
      res.json(buildings)
    })
  } catch (e) {
    throw new HttpError(500, "Can't read buildings cards.")
  }
})

export default router
