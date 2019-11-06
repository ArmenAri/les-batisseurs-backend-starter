import writeFile from "../utlis/writeFile"
import readFile from "../utils/readFile"

export async function saveGame(game) {
  var gameObj = JSON.parse(game)
  var gameContent = JSON.stringify(gameObj)
  var PATHNAME = "../storage/" + game.id + ".json"

  await writeFile(PATHNAME, gameContent)
}

export async function loadGame(gameId) {
  const gameData = await readFile("../storage/" + gameId + ".json")
  var jsonParsed = JSON.parse(gameData)
  return jsonParsed
}
