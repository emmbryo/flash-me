import { FlashcardController } from '../src/controllers/flashcard-controller.js'

const controller = new FlashcardController()

describe('Flashcard controller constructor', () => {
  describe('create flashcard controller object', () => {
    test('Constructor should return instance of class FlashcardController', () => {
      expect(controller).toBeInstanceOf(FlashcardController)
    })
  })
})