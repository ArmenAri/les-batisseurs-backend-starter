import * as cardService from "../services/cardService"
import fs from "fs"

jest.mock("fs")

describe("readFile", () => {
  test("reading a file and returning its content", async () => {
    fs.readFile.mockImplementation((_path, _opt, callback) =>
      callback(null, "foo")
    )
    const response = await cardService.readFile("PATH")
    expect(response).toStrictEqual("foo")
  })
  test("reading file and returning error", async () => {
    fs.readFile.mockImplementation((_path, _opt, callback) =>
      callback(new Error("Error message !"))
    )
    const response = cardService.readFile("PATH")
    await expect(response).rejects.toThrow("Error message !")
  })
})

describe("csvToJson", () => {
  test("transform a csv to a javascript object", async () => {
    const response = cardService.csvToJSON(
      `\
id;price;stone;wood;knowledge;tile
200;2;0;0;1;1\
`
    )
    expect(response).toStrictEqual([
      {
        id: "200",
        knowledge: "1",
        price: "2",
        stone: "0",
        tile: "1",
        wood: "0"
      }
    ])
  })
})
