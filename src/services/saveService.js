import writeFile from "../utils/writeFile"
import readFile from "../utils/readFile"
import path from "path"

export async function saveGame(game) {
  var gameContent = JSON.stringify(game)
  var PATHNAME = path.join(__dirname, "../storage/", game.id + ".json")

  await writeFile(PATHNAME, gameContent)
}

export async function loadGame(gameId) {
  const gameContent = await readFile(
    path.join(__dirname, "../storage/", gameId + ".json")
  )
  var game = JSON.parse(gameContent)
  return game
}
