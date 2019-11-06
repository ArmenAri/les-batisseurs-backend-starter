import fs from "fs"
import HttpError from "../middlewares/HttpError"

export function saveGame(game) {
  var gameObj = JSON.parse(game)
  var gameContent = JSON.stringify(gameObj)
  var PATHNAME = "../storage/" + game.id + ".json"

  fs.writeFile(PATHNAME, gameContent, "utf8", function(err) {
    if (err) {
      throw new HttpError(500, "An error occured while saving the game.")
    }
    console.log("JSON file has been saved.")
  })
}

export function loadGame(gameId) {
  fs.readFile("../storage/" + gameId + ".json", function(err, data) {
    if (err) {
      throw new HttpError(500, "An error occured while loading the game.")
    }
    var jsonData = data
    var jsonParsed = JSON.parse(jsonData)
    return jsonParsed
  })
}
