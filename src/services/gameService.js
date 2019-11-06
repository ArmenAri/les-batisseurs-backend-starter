import uuidv4 from "uuid"
import cardService from "./cardService"

const workers = cardService.importWorkers()
const apprentice = workers.slice(0, 6)

export const createGameId = () => uuidv4()

async function createAvailableWorkersArray() {
  const res = apprentice[Math.random() * apprentice.length]
  apprentice.filter(e => e.id !== res.id)
  return [res]
}

function createPlayerArray(numberOfPlayer) {
  const players = []
  for (let i = 0; i < numberOfPlayer; ++i) {
    players.push({
      id: i,
      finishedBuildings: [],
      availableWorkers: createAvailableWorkersArray(),
      underConstructionBuildings: [],
      money: 10,
      victoryPoints: 0,
      actions: 3
    })
  }
}

export function initGame(name, numberOfPlayer) {
  return {
    id: createGameId(),
    currentPlayer: 0,
    moneyAvailable: 0,
    workers: [
      {
        id: 0,
        price: 0,
        stone: 0,
        wood: 0,
        knowledge: 0,
        tile: 0
      }
    ],
    buildings: [
      {
        id: 0,
        reward: 0,
        victoryPoint: 0,
        stone: 0,
        wood: 0,
        knowledge: 0,
        tile: 0,
        stoneProduced: 0,
        woodProduced: 0,
        knowledgeProduced: 0,
        tileProduced: 0,
        workers: [
          {
            id: 0,
            price: 0,
            stone: 0,
            wood: 0,
            knowledge: 0,
            tile: 0
          }
        ]
      }
    ],
    remainingWorkers: 0,
    remainingBuildings: 0,
    nextWorker: {
      id: 0,
      price: 0,
      stone: 0,
      wood: 0,
      knowledge: 0,
      tile: 0
    },
    nextBuilding: {
      id: 0,
      reward: 0,
      victoryPoint: 0,
      stone: 0,
      wood: 0,
      knowledge: 0,
      tile: 0,
      stoneProduced: 0,
      woodProduced: 0,
      knowledgeProduced: 0,
      tileProduced: 0,
      workers: [
        {
          id: 0,
          price: 0,
          stone: 0,
          wood: 0,
          knowledge: 0,
          tile: 0
        }
      ]
    },
    done: true,
    name: name,
    createDate: "string",
    players: createPlayerArray(numberOfPlayer)
  }
}

/*
[
      {
        id: 0,
        finishedBuildings: [
          {
            id: 0,
            reward: 0,
            victoryPoint: 0,
            stone: 0,
            wood: 0,
            knowledge: 0,
            tile: 0,
            stoneProduced: 0,
            woodProduced: 0,
            knowledgeProduced: 0,
            tileProduced: 0,
            workers: [
              {
                id: 0,
                price: 0,
                stone: 0,
                wood: 0,
                knowledge: 0,
                tile: 0
              }
            ]
          }
        ],
        availableWorkers: [
          {
            id: 0,
            price: 0,
            stone: 0,
            wood: 0,
            knowledge: 0,
            tile: 0
          }
        ],
        underConstructionBuildings: [
          {
            id: 0,
            reward: 0,
            victoryPoint: 0,
            stone: 0,
            wood: 0,
            knowledge: 0,
            tile: 0,
            stoneProduced: 0,
            woodProduced: 0,
            knowledgeProduced: 0,
            tileProduced: 0,
            workers: [
              {
                id: 0,
                price: 0,
                stone: 0,
                wood: 0,
                knowledge: 0,
                tile: 0
              }
            ]
          }
        ],
        money: 0,
        victoryPoints: 0,
        actions: 0
      }
    ]
    */
