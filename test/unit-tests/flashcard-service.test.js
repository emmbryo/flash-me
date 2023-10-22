import { FlashcardService } from "../../src/services/flashcard-service"
import { req } from './mock-objects/requestCycleObjects.js'
import fs from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const relativePath = '../..'
const dataFile = 'test/unit-tests/mock-data/flashcards-mock.json'

const service = new FlashcardService(relativePath, dataFile)
const testWord = 'belangrijk'

const directoryFullName = dirname(fileURLToPath(import.meta.url))
const filePath = join(directoryFullName, relativePath, dataFile)

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
  test('saveCard() should return an object.', () => {
    expect(typeof response).toBe('object')
  })
  test('saveCard() should return an object with parameters: [id, back, front]', () => {
    const keys = Object.keys(response)
    expect(keys[0]).toBe('id')
    expect(keys[1]).toBe('back')
    expect(keys[2]).toBe('front')
  })
})

describe('Flashcard service deleteCard method', () => {
  const rawDataBeforeDelete = fs.readFileSync(filePath, 'utf8')
  const dataBeforeDelete = JSON.parse(rawDataBeforeDelete)

  service.deleteCard(dataBeforeDelete.length)
  
  const rawDataAfterDelete = fs.readFileSync(filePath, 'utf8')
  const dataAfterDelete = JSON.parse(rawDataAfterDelete)
  test('deleteCard() should reduce the length of the data array by one.', () => {
    expect(dataAfterDelete.length).toBe(dataBeforeDelete.length - 1)
  })
})