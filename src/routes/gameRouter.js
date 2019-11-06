import express from "express"
const router = express.Router()

router.post("/", function(req, res) {
  const name = req.body.name
  const numberOfPlayers = req.body.numberOfPlayers
  const shuffle = req.body.shuffle || true

  res.send({
    name,
    numberOfPlayers,
    shuffle
  })
})

export default router
