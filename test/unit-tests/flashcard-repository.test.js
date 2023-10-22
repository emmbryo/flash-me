import { FlashcardRepository } from '../../src/repositories/flashcard-repository.js'
const relativePath = '../..'
const dataFile = 'test/unit-tests/mock-data/flashcards-mock.json'

const repository = new FlashcardRepository(relativePath, dataFile)

describe('Flashcard repository constructor', () => {
  describe('Create flashcard repository object', () => {
    test('Constructor should return instance of class FlashcardRepository', () => {
      expect(repository).toBeInstanceOf(FlashcardRepository)
    })
  })
})

