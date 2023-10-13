import { FlashcardService } from "../src/services/flashcard-service"

const service = new FlashcardService()

describe('Flashcard service constructor', () => {
  describe('Create flashcard service object', () => {
    test('Constructor should return instance of class FlashcardService', () => {
      expect(service).toBeInstanceOf(FlashcardService)
    })
  })
})

describe('Flashcard service getCards method', () => {
  test('getCards() should return an array.', () => {
    const response = service.getCards()
    expect(Array.isArray(response)).toBe(true)
  })
})

describe('Flashcard service searchWord method', () => {
  test('searchWord() should return an object.', () => {
    const response = service.searchWord('belangrijk')
    expect(typeof response).toBe('object')
  })
})