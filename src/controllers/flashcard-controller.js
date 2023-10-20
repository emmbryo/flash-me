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
   * All methods of this class share the same parameters:
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
      res.render('flashcards/deck', { viewData: flashcards })
    } catch (error) {
      next(error)
    }
  }

  createCard (req, res, next) {
    try {
      const defaultData = this.#service.getDefaultData()
      res.render('flashcards/create', {viewData: defaultData})
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

  saveCard (req, res, next) {
    try {
      const card = this.#service.saveCard(req.body)
      res.render('flashcards/card', { viewData: card })
    } catch (error) {
      next(error)
    }
  }
}
