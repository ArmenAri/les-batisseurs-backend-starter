import express from "express"
const router = express.Router()

router.post("/", function(req, res) {
  const name = req.body.name
  const numberOfPlayers = req.body.numberOfPlayers

  res.send({
    name: name,
    numberOfPlayers: numberOfPlayers
  })
})

export default router
