import express from "express"
const router = express.Router()

router.post("/", function(req, res) {
  const numberOfPlayers = req.body.numberOfPlayers
  const shuffle = req.body.shuffle
  const name = req.body.name

  res.send({
    numberOfPlayers: numberOfPlayers,
    shuffle: shuffle,
    name: name
  })
})

export default router
