import express from "express"
import HttpError from "../middlewares/HttpError"

const router = express.Router()

router.post("/", function(req, res) {
  const name = req.body.name
  const numberOfPlayers = req.body.numberOfPlayers

  res.send({
    name: name,
    numberOfPlayers: numberOfPlayers
  })
})

router.get("/:id", async function(req, res) {
  try {
    // const game = await
    // res.json(game)
  } catch (e) {
    throw new HttpError(500, "Can't find the game")
  }
})

export default router
