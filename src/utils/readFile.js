import fs from "fs"

export default function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(data)
    })
  })
}
