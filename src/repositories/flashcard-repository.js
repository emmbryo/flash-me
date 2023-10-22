import fs from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export class FlashcardRepository {
  #dataFile
  #relativePath

  constructor (relativePath = '..', dataFile = 'data/flashcards.json') {
    this.#dataFile = dataFile
    this.#relativePath = relativePath
  }

  readData () {
    const directoryFullName = dirname(fileURLToPath(import.meta.url))
    const filePath = join(directoryFullName, this.#relativePath, this.#dataFile)
    const data = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(data)
  }

  writeData (cardData) {
    const cards = this.readData()
    const highestId = cards[cards.length - 1].id
    cardData.id = Number.parseInt(highestId) + 1
    cards.push(cardData)
    const jsonData = JSON.stringify(cards, null, 2)

    const directoryFullName = dirname(fileURLToPath(import.meta.url))
    const filePath = join(directoryFullName, this.#relativePath, this.#dataFile)

    fs.writeFileSync(filePath, jsonData, 'utf-8')

    return cardData
  }

  deleteCard (id) {
    const cards = this.readData()
    this.#removeCard(id, cards)
  
    const jsonData = JSON.stringify(cards, 2, null)

    const directoryFullName = dirname(fileURLToPath(import.meta.url))
    const filePath = join(directoryFullName, this.#relativePath, this.#dataFile)

    fs.writeFileSync(filePath, jsonData, 'utf-8')
  }

  #removeCard (id, cards) {
    let cardIdentified = false
    let i = 0
    while (!cardIdentified && i < cards.length) {
      if (cards[i].id === id) {
        cardIdentified = true
      }
      i++
    }
    cards.splice(i - 1, 1)
  }

  
}