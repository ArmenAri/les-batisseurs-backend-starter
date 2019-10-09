import express from "express"
import utils from "../services/cardService"
const router = express.Router()

// routes
router.get("/workers", function(req, res) {
  res.json(
    utils.convertToJSON(
      "/home/local.isima.fr/araristake/Documents/dev/javascript/les-batisseurs-backend-starter/src/ressources/workers.csv"
    )
  )
})

router.get("/buildings", function(req, res) {
  res.json(
    utils.convertToJSON(
      "/home/local.isima.fr/araristake/Documents/dev/javascript/les-batisseurs-backend-starter/src/ressources/buildings.csv"
    )
  )
})

export default router
