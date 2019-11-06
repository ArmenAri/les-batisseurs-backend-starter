import express from "express"
import * as gameService from "../services/gameService"
import * as saveService from "../services/saveService"

const router = express.Router()

router.post("/", async function(req, res) {
  const name = req.body.name
  const numberOfPlayers = req.body.numberOfPlayers
  const shuffle = req.body.shuffle || true

  const game = await gameService.initGame(name, numberOfPlayers, shuffle)
  const { _private, ...returnedGame } = game

  res.send(returnedGame)

  saveService.saveGame(returnedGame)
})

export default router
