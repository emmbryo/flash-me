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
