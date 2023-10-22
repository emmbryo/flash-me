import { FlashcardRepository } from "../../../src/repositories/flashcard-repository.js"

export class FlashcardRepositoryMock extends FlashcardRepository {
  constructor (relativPath, dataFile) {
    super(relativPath, dataFile)
  }

  // readData () {
  //   return JSON.parse(data)
  // }

  // writeData (cardData) {

  // }

  // deleteCard (id) {

  // }

  // #removeCard (id, cards) {

  // }

}