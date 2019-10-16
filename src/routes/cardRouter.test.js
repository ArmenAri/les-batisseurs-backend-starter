import * as cardService from "../services/cardService"

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
