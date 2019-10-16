import express from "express"
import * as cardService from "../services/cardService"

const router = express.Router()

// routes
router.get("/workers", function(req, res) {
  cardService.importWorkers().then(workers => {
    res.json(workers)
  })
})

router.get("/buildings", function(req, res) {
  cardService.importBuildings().then(buildings => {
    res.json(buildings)
  })
})

export default router
