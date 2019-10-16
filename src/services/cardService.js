import path from "path"
import fs from "fs"

const PATH_TO_WORKERS = "/../ressources/workers.csv"
const PATH_TO_BUILDINGS = "/../ressources/buildings.csv"

export async function readFile(arg) {
  return new Promise((resolve, reject) => {
    fs.readFile(arg, "utf8", (err, response) => {
      if (err) {
        return reject(err)
      }
      return resolve(response)
    })
  })
}

export function csvToJSON(fileContent) {
  console.log(fileContent)
  const lines = fileContent.split("\n")
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

export async function importWorkers() {
  const buildingsFile = await readFile(path.join(__dirname, PATH_TO_WORKERS))
  return buildingsFile
}

export async function importBuildings() {
  const workersFile = await readFile(path.join(__dirname, PATH_TO_BUILDINGS))
  return csvToJSON(workersFile)
}
