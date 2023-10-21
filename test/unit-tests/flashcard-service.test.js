import { FlashcardService } from "../../src/services/flashcard-service"
import { req } from './mock-objects/requestCycleObjects.js'

const service = new FlashcardService()
const testWord = 'belangrijk'

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
  test('searchWord() should return an object.', async () => {
    const response = await service.searchWord(testWord)
    expect(typeof response).toBe('object')
  })
  test('searchWord() should return an object with keys: [translation, gapSentence, word, pronunciation, sentence]', async () => {
    const response = await service.searchWord(testWord)
    const keys = Object.keys(response)
    const expectedValues = ['translation', 'gapSentence', 'word', 'pronunciation', 'sentence']
    for (let i = 0; i < keys.length; i++) {
      expect(keys[i]).toBe(expectedValues[i])
    }
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