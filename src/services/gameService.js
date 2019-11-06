import uuidv4 from "uuid"
import * as cardService from "../services/cardService"

/*
const workers = cardService.importWorkers()
const apprentice = workers.slice(0, 6)
*/

export const createGameId = () => uuidv4()

function createApprenticeArray(deckWorkers) {
  return deckWorkers.slice(0, 6)
}

function createPlayerArray(numberOfPlayers, deckWorkers) {
  const players = []
  let apprentices = createApprenticeArray(deckWorkers)
  for (let i = 0; i < numberOfPlayers; ++i) {
    const apprentice =
      apprentices[Math.floor(Math.random() * Math.floor(apprentices.length))]
    apprentices = apprentices.filter(a => a.id !== apprentice.id)
    players.push({
      id: i,
      finishedBuildings: [],
      availableWorkers: [apprentice],
      underConstructionBuildings: [],
      money: 10,
      victoryPoints: 0,
      actions: 3
    })
  }
  return players
}

export async function initGame(name, numberOfPlayers) {
  const deckWorkers = await cardService.importWorkers()
  const deckBuildings = await cardService.importBuildings()
  return {
    _private: {
      deckWorkers,
      deckBuildings
    },
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
    createDate: new Date(),
    players: createPlayerArray(numberOfPlayers, deckWorkers)
  }
}
