/**
 * The routes.
 * @author Emma Fransson <ef222hr@student.lnu.se>
 * @version 1.0.0
 */

import express from 'express'
import { router as flashcardRouter } from './flashcard-router.js'

export const router = express.Router()

router.use('/', flashcardRouter)

router.use('*', (req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})