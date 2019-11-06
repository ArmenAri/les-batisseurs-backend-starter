import fs from "fs"

export default function writeFile(path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, "utf8", err => {
      if (err) {
        reject(err)
      }
      resolve(true)
    })
  })
}
