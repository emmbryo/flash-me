/**
 * Flashcard controller.
 *
 * @author Emma Fransson <ef222hr@student.lnu.se>
 * @version 1.0.0
 */

import { FlashcardService } from '../services/flashcard-service.js'

export class FlashcardController {
  /** 
   * @type {FlashcardService} 
   */
  #service
  constructor (service = new FlashcardService()) {
    this.#service = service
  }
  
  /**
   * The methods index, getCards and createCard share the same parameters:
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
   
  index (req, res, next) {
    try {
      res.render('home/index')
    } catch (error) {
      next(error)
    }
  }

  getCards (req, res, next) {
    try {
      const flashcards = this.#service.getCards()
      console.log(flashcards)
      res.render('flashcards/deck', { viewData: flashcards })
    } catch (error) {
      next(error)
    }
  }

  createCard (req, res, next) {
    try {
      res.render('flashcards/create', {viewData: {word: 'hejsan'}})
    } catch (error) {
      next(error)
    }
  }

  async searchWord (req, res, next) {
    try {
      const wordInfo = await this.#service.searchWord(req.body.search)
      res.render('flashcards/create', { viewData: wordInfo })
    } catch (error) {
      next(error)
    }
  }
}
