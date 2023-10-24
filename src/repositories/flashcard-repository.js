import fs from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export class FlashcardRepository {
  #filePath

  constructor (relativePath = '..', dataFile = 'data/flashcards.json') {
    const directoryFullName = dirname(fileURLToPath(import.meta.url))
    this.#filePath = join(directoryFullName, relativePath, dataFile)
  }

  readData () {
    const data = fs.readFileSync(this.#filePath, 'utf8')
    return JSON.parse(data)
  }

  writeData (newCard) {
    const cards = this.readData()

    this.#setNewCardId(cards, newCard)
    this.#addNewCard(cards, newCard)
    this.#writeCardsToFile(cards)

    return newCard
  }

  #setNewCardId (cards, newCard) {
    let highestId = 1
    if (cards.length > 0) {
      highestId = cards[cards.length - 1].id + 1
    }
    newCard.id = Number.parseInt(highestId)
  }

  #addNewCard (cards, newCard) {
    cards.push(newCard)
  }

  #writeCardsToFile (cards) {
    const jsonData = JSON.stringify(cards, null, 2)
    fs.writeFileSync(this.#filePath, jsonData, 'utf-8')
  }

  deleteCard (id) {
    const cards = this.readData()
    this.#removeCard(id, cards)
    this.#writeCardsToFile(cards)
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