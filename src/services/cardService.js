import path from "path"
import fs from "fs"

const fsWrapper = arg =>
  new Promise((resolve, reject) => {
    fs.readFile(arg, "utf8", (err, response) => {
      if (err) {
        return reject(err)
      }
      return resolve(response)
    })
  })

function toJSON(response) {
  const lines = response.split("\n")
  const result = []
  const headers = lines[0].split(";")

  for (let i = 1; i < lines.length; i++) {
    const obj = {}
    const currentline = lines[i].split(";")

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j]
    }

    result.push(obj)
  }
  return result
}

export function importWorkers() {
  return fsWrapper(path.join(__dirname, "/../ressources/workers.csv")).then(
    value => {
      return toJSON(value)
    }
  )
}

export function importBuildings() {
  return fsWrapper(path.join(__dirname, "/../ressources/buildings.csv")).then(
    value => {
      return toJSON(value)
    }
  )
}
