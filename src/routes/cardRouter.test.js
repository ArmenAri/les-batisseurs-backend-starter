import request from "supertest"
import app from "../app"
import readFile from "../utils/readFile"
jest.mock("../utils/readFile")

describe("/cards/workers", () => {
  test("should response the GET method", async () => {
    const testCsv = `\
toto;titi;tutu
1;2;3
4;5;6`
    readFile.mockResolvedValue(testCsv)
    const response = await request(app).get("/cards/workers")
    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual([
      { toto: 1, titi: 2, tutu: 3 },
      { toto: 4, titi: 5, tutu: 6 }
    ])
  })

  test("should return 500 if reading failed", async () => {
    readFile.mockRejectedValue(Error("Error test"))
    const response = await request(app).get("/cards/workers")
    expect(response.statusCode).toBe(500)
    expect(response.text).toEqual("Can't read workers cards.")
  })
})

describe("/cards/buildings", () => {
  test("should response the GET method", async () => {
    const testCsv = `\
toto;titi;tutu
1;2;3
4;5;6`
    readFile.mockResolvedValue(testCsv)
    const response = await request(app).get("/cards/buildings")
    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual([
      { toto: 1, titi: 2, tutu: 3 },
      { toto: 4, titi: 5, tutu: 6 }
    ])
  })

  test("should return 500 if reading failed", async () => {
    readFile.mockRejectedValue(Error("Error test"))
    const response = await request(app).get("/cards/buildings")
    expect(response.statusCode).toBe(500)
    expect(response.text).toEqual("Can't read buildings cards.")
  })
})
