import request from "supertest"
import app from "../app"

describe("Test the workers check", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/cards/workers")
    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual([
      {
        id: "200",
        knowledge: "1",
        price: "2",
        stone: "0",
        tile: "1",
        wood: "0"
      },
      {
        id: "201",
        knowledge: "0",
        price: "2",
        stone: "0",
        tile: "1",
        wood: "1"
      },
      {
        id: "202",
        knowledge: "1",
        price: "2",
        stone: "0",
        tile: "0",
        wood: "1"
      },
      {
        id: "203",
        knowledge: "0",
        price: "2",
        stone: "1",
        tile: "1",
        wood: "0"
      },
      {
        id: "204",
        knowledge: "1",
        price: "2",
        stone: "1",
        tile: "0",
        wood: "0"
      },
      {
        id: "205",
        knowledge: "0",
        price: "2",
        stone: "1",
        tile: "0",
        wood: "1"
      },
      {
        id: "206",
        knowledge: "1",
        price: "3",
        stone: "0",
        tile: "2",
        wood: "0"
      },
      {
        id: "207",
        knowledge: "2",
        price: "3",
        stone: "0",
        tile: "1",
        wood: "0"
      },
      {
        id: "208",
        knowledge: "0",
        price: "3",
        stone: "0",
        tile: "2",
        wood: "1"
      },
      {
        id: "209",
        knowledge: "2",
        price: "3",
        stone: "0",
        tile: "0",
        wood: "1"
      },
      {
        id: "210",
        knowledge: "0",
        price: "3",
        stone: "0",
        tile: "1",
        wood: "2"
      },
      {
        id: "211",
        knowledge: "1",
        price: "3",
        stone: "0",
        tile: "0",
        wood: "2"
      },
      {
        id: "212",
        knowledge: "0",
        price: "3",
        stone: "1",
        tile: "2",
        wood: "0"
      },
      {
        id: "213",
        knowledge: "2",
        price: "3",
        stone: "1",
        tile: "0",
        wood: "0"
      },
      {
        id: "214",
        knowledge: "0",
        price: "3",
        stone: "1",
        tile: "0",
        wood: "2"
      },
      {
        id: "215",
        knowledge: "0",
        price: "3",
        stone: "2",
        tile: "1",
        wood: "0"
      },
      {
        id: "216",
        knowledge: "1",
        price: "3",
        stone: "2",
        tile: "0",
        wood: "0"
      },
      {
        id: "217",
        knowledge: "0",
        price: "3",
        stone: "2",
        tile: "0",
        wood: "1"
      },
      {
        id: "218",
        knowledge: "1",
        price: "4",
        stone: "0",
        tile: "3",
        wood: "0"
      },
      {
        id: "219",
        knowledge: "2",
        price: "4",
        stone: "0",
        tile: "2",
        wood: "0"
      },
      {
        id: "220",
        knowledge: "1",
        price: "4",
        stone: "0",
        tile: "2",
        wood: "1"
      },
      {
        id: "221",
        knowledge: "0",
        price: "4",
        stone: "0",
        tile: "2",
        wood: "2"
      },
      {
        id: "222",
        knowledge: "2",
        price: "4",
        stone: "0",
        tile: "0",
        wood: "2"
      },
      {
        id: "223",
        knowledge: "0",
        price: "4",
        stone: "0",
        tile: "1",
        wood: "3"
      },
      {
        id: "224",
        knowledge: "2",
        price: "4",
        stone: "1",
        tile: "1",
        wood: "0"
      },
      {
        id: "225",
        knowledge: "3",
        price: "4",
        stone: "1",
        tile: "0",
        wood: "0"
      },
      {
        id: "226",
        knowledge: "1",
        price: "4",
        stone: "1",
        tile: "1",
        wood: "1"
      },
      {
        id: "227",
        knowledge: "1",
        price: "4",
        stone: "1",
        tile: "1",
        wood: "1"
      },
      {
        id: "228",
        knowledge: "0",
        price: "4",
        stone: "1",
        tile: "1",
        wood: "2"
      },
      {
        id: "229",
        knowledge: "0",
        price: "4",
        stone: "2",
        tile: "2",
        wood: "0"
      },
      {
        id: "230",
        knowledge: "2",
        price: "4",
        stone: "2",
        tile: "0",
        wood: "0"
      },
      {
        id: "231",
        knowledge: "1",
        price: "4",
        stone: "2",
        tile: "0",
        wood: "1"
      },
      {
        id: "232",
        knowledge: "0",
        price: "4",
        stone: "2",
        tile: "0",
        wood: "2"
      },
      {
        id: "233",
        knowledge: "0",
        price: "4",
        stone: "3",
        tile: "0",
        wood: "1"
      },
      {
        id: "234",
        knowledge: "2",
        price: "5",
        stone: "0",
        tile: "3",
        wood: "0"
      },
      {
        id: "235",
        knowledge: "3",
        price: "5",
        stone: "0",
        tile: "2",
        wood: "0"
      },
      {
        id: "236",
        knowledge: "3",
        price: "5",
        stone: "0",
        tile: "0",
        wood: "2"
      },
      {
        id: "237",
        knowledge: "2",
        price: "5",
        stone: "0",
        tile: "0",
        wood: "3"
      },
      {
        id: "238",
        knowledge: "0",
        price: "5",
        stone: "2",
        tile: "3",
        wood: "0"
      },
      {
        id: "239",
        knowledge: "0",
        price: "5",
        stone: "2",
        tile: "0",
        wood: "3"
      },
      {
        id: "240",
        knowledge: "0",
        price: "5",
        stone: "3",
        tile: "2",
        wood: "0"
      },
      {
        id: "241",
        knowledge: "0",
        price: "5",
        stone: "3",
        tile: "0",
        wood: "2"
      }
    ])
  })
})

describe("Test the buildings check", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/cards/buildings")
    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual([
      {
        id: "100",
        knowledge: "1",
        "knowledge produced": "0",
        reward: "0",
        stone: "0",
        "stone produced": "3",
        tile: "0",
        "tile produced": "0",
        "victory point": "2",
        wood: "2",
        "wood produced": "0"
      },
      {
        id: "101",
        knowledge: "0",
        "knowledge produced": "0",
        reward: "0",
        stone: "0",
        "stone produced": "2",
        tile: "1",
        "tile produced": "0",
        "victory point": "1",
        wood: "1",
        "wood produced": "0"
      },
      {
        id: "102",
        knowledge: "2",
        "knowledge produced": "0",
        reward: "0",
        stone: "0",
        "stone produced": "0",
        tile: "1",
        "tile produced": "0",
        "victory point": "2",
        wood: "0",
        "wood produced": "3"
      },
      {
        id: "103",
        knowledge: "1",
        "knowledge produced": "0",
        reward: "0",
        stone: "1",
        "stone produced": "0",
        tile: "0",
        "tile produced": "0",
        "victory point": "1",
        wood: "0",
        "wood produced": "2"
      },
      {
        id: "104",
        knowledge: "1",
        "knowledge produced": "0",
        reward: "0",
        stone: "0",
        "stone produced": "0",
        tile: "0",
        "tile produced": "2",
        "victory point": "1",
        wood: "1",
        "wood produced": "0"
      },
      {
        id: "105",
        knowledge: "0",
        "knowledge produced": "2",
        reward: "0",
        stone: "1",
        "stone produced": "0",
        tile: "0",
        "tile produced": "0",
        "victory point": "1",
        wood: "1",
        "wood produced": "0"
      },
      {
        id: "106",
        knowledge: "0",
        "knowledge produced": "3",
        reward: "0",
        stone: "1",
        "stone produced": "0",
        tile: "2",
        "tile produced": "0",
        "victory point": "2",
        wood: "0",
        "wood produced": "0"
      },
      {
        id: "107",
        knowledge: "0",
        "knowledge produced": "0",
        reward: "0",
        stone: "2",
        "stone produced": "0",
        tile: "0",
        "tile produced": "3",
        "victory point": "2",
        wood: "1",
        "wood produced": "0"
      },
      {
        id: "108",
        knowledge: "0",
        "knowledge produced": "0",
        reward: "6",
        stone: "0",
        "stone produced": "0",
        tile: "2",
        "tile produced": "0",
        "victory point": "1",
        wood: "1",
        "wood produced": "0"
      },
      {
        id: "109",
        knowledge: "2",
        "knowledge produced": "0",
        reward: "6",
        stone: "0",
        "stone produced": "0",
        tile: "0",
        "tile produced": "0",
        "victory point": "1",
        wood: "1",
        "wood produced": "0"
      },
      {
        id: "110",
        knowledge: "1",
        "knowledge produced": "0",
        reward: "6",
        stone: "0",
        "stone produced": "0",
        tile: "0",
        "tile produced": "0",
        "victory point": "1",
        wood: "2",
        "wood produced": "0"
      },
      {
        id: "111",
        knowledge: "0",
        "knowledge produced": "0",
        reward: "6",
        stone: "1",
        "stone produced": "0",
        tile: "2",
        "tile produced": "0",
        "victory point": "1",
        wood: "0",
        "wood produced": "0"
      },
      {
        id: "112",
        knowledge: "1",
        "knowledge produced": "0",
        reward: "6",
        stone: "2",
        "stone produced": "0",
        tile: "0",
        "tile produced": "0",
        "victory point": "1",
        wood: "0",
        "wood produced": "0"
      },
      {
        id: "113",
        knowledge: "1",
        "knowledge produced": "0",
        reward: "8",
        stone: "0",
        "stone produced": "0",
        tile: "",
        "tile produced": "0",
        "victory point": "0",
        wood: "1",
        "wood produced": "0"
      },
      {
        id: "114",
        knowledge: "0",
        "knowledge produced": "0",
        reward: "8",
        stone: "1",
        "stone produced": "0",
        tile: "1",
        "tile produced": "0",
        "victory point": "0",
        wood: "0",
        "wood produced": "0"
      },
      {
        id: "115",
        knowledge: "1",
        "knowledge produced": "0",
        reward: "10",
        stone: "0",
        "stone produced": "0",
        tile: "2",
        "tile produced": "0",
        "victory point": "2",
        wood: "2",
        "wood produced": "0"
      },
      {
        id: "116",
        knowledge: "1",
        "knowledge produced": "0",
        reward: "10",
        stone: "1",
        "stone produced": "0",
        tile: "1",
        "tile produced": "0",
        "victory point": "2",
        wood: "2",
        "wood produced": "0"
      },
      {
        id: "117",
        knowledge: "2",
        "knowledge produced": "0",
        reward: "10",
        stone: "2",
        "stone produced": "0",
        tile: "1",
        "tile produced": "0",
        "victory point": "2",
        wood: "0",
        "wood produced": "0"
      },
      {
        id: "118",
        knowledge: "0",
        "knowledge produced": "0",
        reward: "10",
        stone: "2",
        "stone produced": "0",
        tile: "2",
        "tile produced": "0",
        "victory point": "2",
        wood: "1",
        "wood produced": "0"
      },
      {
        id: "119",
        knowledge: "2",
        "knowledge produced": "0",
        reward: "12",
        stone: "0",
        "stone produced": "0",
        tile: "3",
        "tile produced": "0",
        "victory point": "3",
        wood: "1",
        "wood produced": "0"
      },
      {
        id: "120",
        knowledge: "2",
        "knowledge produced": "0",
        reward: "12",
        stone: "0",
        "stone produced": "0",
        tile: "2",
        "tile produced": "0",
        "victory point": "3",
        wood: "2",
        "wood produced": "0"
      },
      {
        id: "121",
        knowledge: "3",
        "knowledge produced": "0",
        reward: "12",
        stone: "0",
        "stone produced": "0",
        tile: "1",
        "tile produced": "0",
        "victory point": "3",
        wood: "2",
        "wood produced": "0"
      },
      {
        id: "122",
        knowledge: "1",
        "knowledge produced": "0",
        reward: "12",
        stone: "0",
        "stone produced": "0",
        tile: "2",
        "tile produced": "0",
        "victory point": "3",
        wood: "3",
        "wood produced": "0"
      },
      {
        id: "123",
        knowledge: "1",
        "knowledge produced": "0",
        reward: "12",
        stone: "2",
        "stone produced": "0",
        tile: "2",
        "tile produced": "0",
        "victory point": "3",
        wood: "1",
        "wood produced": "0"
      },
      {
        id: "124",
        knowledge: "3",
        "knowledge produced": "0",
        reward: "14",
        stone: "0",
        "stone produced": "0",
        tile: "2",
        "tile produced": "0",
        "victory point": "3",
        wood: "2",
        "wood produced": "0"
      },
      {
        id: "125",
        knowledge: "1",
        "knowledge produced": "0",
        reward: "14",
        stone: "0",
        "stone produced": "0",
        tile: "3",
        "tile produced": "0",
        "victory point": "3",
        wood: "3",
        "wood produced": "0"
      },
      {
        id: "126",
        knowledge: "0",
        "knowledge produced": "0",
        reward: "14",
        stone: "2",
        "stone produced": "0",
        tile: "3",
        "tile produced": "0",
        "victory point": "3",
        wood: "2",
        "wood produced": "0"
      },
      {
        id: "127",
        knowledge: "3",
        "knowledge produced": "0",
        reward: "14",
        stone: "3",
        "stone produced": "0",
        tile: "1",
        "tile produced": "0",
        "victory point": "3",
        wood: "0",
        "wood produced": "0"
      },
      {
        id: "128",
        knowledge: "2",
        "knowledge produced": "0",
        reward: "16",
        stone: "0",
        "stone produced": "0",
        tile: "3",
        "tile produced": "0",
        "victory point": "4",
        wood: "3",
        "wood produced": "0"
      },
      {
        id: "129",
        knowledge: "1",
        "knowledge produced": "0",
        reward: "16",
        stone: "1",
        "stone produced": "0",
        tile: "3",
        "tile produced": "0",
        "victory point": "4",
        wood: "3",
        "wood produced": "0"
      },
      {
        id: "130",
        knowledge: "3",
        "knowledge produced": "0",
        reward: "16",
        stone: "1",
        "stone produced": "0",
        tile: "1",
        "tile produced": "0",
        "victory point": "4",
        wood: "3",
        "wood produced": "0"
      },
      {
        id: "131",
        knowledge: "2",
        "knowledge produced": "0",
        reward: "16",
        stone: "2",
        "stone produced": "0",
        tile: "2",
        "tile produced": "0",
        "victory point": "4",
        wood: "2",
        "wood produced": "0"
      },
      {
        id: "132",
        knowledge: "2",
        "knowledge produced": "0",
        reward: "16",
        stone: "3",
        "stone produced": "0",
        tile: "2",
        "tile produced": "0",
        "victory point": "4",
        wood: "1",
        "wood produced": "0"
      },
      {
        id: "133",
        knowledge: "0",
        "knowledge produced": "0",
        reward: "16",
        stone: "4",
        "stone produced": "0",
        tile: "2",
        "tile produced": "0",
        "victory point": "4",
        wood: "2",
        "wood produced": "0"
      },
      {
        id: "134",
        knowledge: "2",
        "knowledge produced": "0",
        reward: "18",
        stone: "3",
        "stone produced": "0",
        tile: "3",
        "tile produced": "0",
        "victory point": "5",
        wood: "2",
        "wood produced": "0"
      },
      {
        id: "135",
        knowledge: "2",
        "knowledge produced": "0",
        reward: "18",
        stone: "3",
        "stone produced": "0",
        tile: "2",
        "tile produced": "0",
        "victory point": "5",
        wood: "3",
        "wood produced": "0"
      },
      {
        id: "136",
        knowledge: "2",
        "knowledge produced": "0",
        reward: "18",
        stone: "4",
        "stone produced": "0",
        tile: "4",
        "tile produced": "0",
        "victory point": "5",
        wood: "0",
        "wood produced": "0"
      },
      {
        id: "137",
        knowledge: "4",
        "knowledge produced": "0",
        reward: "18",
        stone: "4",
        "stone produced": "0",
        tile: "0",
        "tile produced": "0",
        "victory point": "5",
        wood: "2",
        "wood produced": "0"
      },
      {
        id: "138",
        knowledge: "2",
        "knowledge produced": "0",
        reward: "18",
        stone: "4",
        "stone produced": "0",
        tile: "1",
        "tile produced": "0",
        "victory point": "5",
        wood: "3",
        "wood produced": "0"
      },
      {
        id: "139",
        knowledge: "5",
        "knowledge produced": "0",
        reward: "20",
        stone: "5",
        "stone produced": "0",
        tile: "0",
        "tile produced": "0",
        "victory point": "6",
        wood: "2",
        "wood produced": "0"
      },
      {
        id: "140",
        knowledge: "5",
        "knowledge produced": "0",
        reward: "20",
        stone: "5",
        "stone produced": "0",
        tile: "3",
        "tile produced": "0",
        "victory point": "7",
        wood: "3",
        "wood produced": "0"
      },
      {
        id: "141",
        knowledge: "4",
        "knowledge produced": "0",
        reward: "20",
        stone: "5",
        "stone produced": "0",
        tile: "4",
        "tile produced": "0",
        "victory point": "8",
        wood: "4",
        "wood produced": "0"
      }
    ])
  })
})
