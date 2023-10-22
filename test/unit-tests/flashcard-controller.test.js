import { FlashcardController } from '../../src/controllers/flashcard-controller.js'
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
  test('getCards method should send data (an object) to the view.', () => {
    res.render('', {})
    controller.getCards(req, res, next)
    const keys = Object.keys(res.data)
    expect(keys.length).toBeGreaterThan(0)
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
  test('searchWord method should send data (object) to the view.', async () => {
    res.render('', {})
    await controller.searchWord(req, res, next)
    const keys = Object.keys(res.data)
    expect(keys.length).toBeGreaterThan(0)
  })
})

describe('saveCard method.', () => {
  test('saveCard method should call res.render with path: flashcards/card', () => {
    res.render('', {})
    controller.saveCard(req, res, next)
    expect(res.path).toBe('flashcards/card')
  })
  test('saveCard method should send data (object) to the view', () => {
    res.render('', {})
    controller.saveCard(req, res, next)
    const keys = Object.keys(res.data)
    expect(keys.length).toBeGreaterThan(0)
  })
})

describe('deleteCard method.', () => {
  test('deleteCard method should call res.render with path: flashcards/deck', () => {
    // res.redirect('')
    controller.deleteCard(req, res, next)
    expect(res.redirectedPath).toBe('..')
  })
})
