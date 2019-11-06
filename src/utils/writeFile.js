import fs from "fs"

export default function writeFile(path, content) {
  fs.writeFile(path, content, err => {
    if (err) throw err
    console.log("The file has been saved !")
  })
}
