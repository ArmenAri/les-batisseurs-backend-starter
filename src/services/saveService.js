import writeFile from "../utils/writeFile"
import readFile from "../utils/readFile"

export async function saveGame(game) {
  var gameContent = JSON.stringify(game)
  var PATHNAME = "../storage/" + game.id + ".json"

  await writeFile(PATHNAME, gameContent)
}

export async function loadGame(gameId) {
  const gameContent = await readFile("../storage/" + gameId + ".json")
  var game = JSON.parse(gameContent)
  return game
}
