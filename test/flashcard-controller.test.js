import { FlashcardController } from '../src/controllers/flashcard-controller.js'
import { FlashcardServiceMock } from './mock-classes/FlashcardServiceMock.js'
import { req, res, next } from './mock-objects/requestCycleObjects.js'

const controller = new FlashcardController(new FlashcardServiceMock())

describe('Flashcard controller constructor', () => {
    test('Constructor should return instance of class FlashcardController', () => {
      expect(controller).toBeInstanceOf(FlashcardController)
    })
})

describe('index method.', () => {
  test('index method should call res.render with path: home/index', () => {
    controller.index(req, res, next)
    expect(res.path).toBe('home/index')
  })
})

describe('getCards method.', () => {
  test('getCards method should call res.render with path: flashcards/deck', () => {
    res.render('', {})
    controller.getCards(req, res, next)
    expect(res.path).toBe('flashcards/deck')
  })
})

describe('createCard method.', () => {
  test('createCard method should call res.render with path: flashcards/create', () => {
    res.render('', {})
    controller.createCard(req, res, next)
    expect(res.path).toBe('flashcards/create')
  })
})

describe('searchWord method.', () => {
  test('searchWord method should call res.render with path: flashcards/create', async () => {
    res.render('', {})
    await controller.searchWord(req, res, next)
    expect(res.path).toBe('flashcards/create')
  })
})