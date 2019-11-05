import path from "path"
import readFile from "../utils/readFile"
import camelCase from "lodash/camelCase"

const PATH_TO_WORKERS = "/../ressources/workers.csv"
const PATH_TO_BUILDINGS = "/../ressources/buildings.csv"

export function csvToJSON(fileContent) {
  const lines = fileContent.split("\n")
  const result = []
  const headers = lines[0].split(";")

  for (let i = 1; i < lines.length; i++) {
    const obj = {}
    const currentline = lines[i].split(";")

    for (let j = 0; j < headers.length; j++) {
      obj[camelCase(headers[j])] = Number.parseInt(currentline[j])
    }

    result.push(obj)
  }
  return result
}

export async function importWorkers() {
  const buildingsFile = await readFile(path.join(__dirname, PATH_TO_WORKERS))
  return csvToJSON(buildingsFile)
}

export async function importBuildings() {
  const workersFile = await readFile(path.join(__dirname, PATH_TO_BUILDINGS))
  return csvToJSON(workersFile)
}
