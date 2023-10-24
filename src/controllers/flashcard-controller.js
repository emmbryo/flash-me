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
   
  renderStartView (res, next) {
    try {
      res.render('start/index')
    } catch (error) {
      next(error)
    }
  }

  getCards (res, next) {
    try {
      const flashcards = this.#service.getCards()
      res.render('flashcards/deck', { viewData: flashcards })
    } catch (error) {
      next(error)
    }
  }

  createCard (res) {
    try {
      const defaultData = this.#service.getDefaultData()
      res.render('flashcards/create', { viewData: defaultData })
    } catch (error) {
      nect(error)
    }
  }

  async searchWord (req, res) {
    try {
      const wordInfo = await this.#service.searchWord(req.body.search)
      res.render('flashcards/create', { viewData: wordInfo })
    } catch (error) {
      req.session.flash = { type: 'danger', text: error.message }
      res.redirect('./create')
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

  deleteCard (req, res, next) {
    try {
      this.#service.deleteCard(req.params.id)
      res.redirect('..')
    } catch (error) {
      next(error)
    }
  }
}
