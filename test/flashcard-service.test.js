import { FlashcardService } from "../src/services/flashcard-service"
import { req } from './mock-objects/requestCycleObjects.js'

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

describe('Flashcard service saveCard method', () => {
  const response = service.saveCard(req.body)
  test('savecard() should return an object.', () => {
    expect(typeof response).toBe('object')
  })
  test('saveCard should return an object with parameters: [front, back]', () => {
    const keys = Object.keys(response)
    expect(keys[0]).toBe('back')
    expect(keys[1]).toBe('front')
  })
})