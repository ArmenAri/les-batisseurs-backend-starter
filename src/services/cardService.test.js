import * as cardService from "../services/cardService"
import readFile from "../utils/readFile"
jest.mock("../utils/readFile")

describe("readFile", () => {
  test("reading a file and returning its content", async () => {
    readFile.mockImplementation(_path => Promise.resolve("foo"))
    const response = await readFile("PATH")
    expect(response).toStrictEqual("foo")
  })
  test("reading file and returning error", async () => {
    readFile.mockImplementation(_path =>
      Promise.reject(new Error("Error message !"))
    )
    const response = readFile("PATH")
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
