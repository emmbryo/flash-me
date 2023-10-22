/**
 * Flashcard routes.
 * @author Emma Fransson <ef222hr@student.lnu.se>
 * @version 1.0.0
 */

import express from 'express'
export const router = express.Router()

const resolveFlashcardController = (req) => {
  return req.app.get('container').resolve('FlashcardController')
}

router.get('/', (req, res, next) => resolveFlashcardController(req).index(req, res, next))

router.get('/flashcards', (req, res, next) => resolveFlashcardController(req).getCards(req, res, next))

router.get('/flashcards/create', (req, res, next) => resolveFlashcardController(req).createCard(req, res, next))

router.post('/flashcards/search', (req, res, next) => resolveFlashcardController(req).searchWord(req, res, next))

router.post('/flashcards/create', (req, res, next) => resolveFlashcardController(req).saveCard(req, res, next))

router.post('/flashcards/:id/delete', (req, res, next) => resolveFlashcardController(req).deleteCard(req, res, next))
