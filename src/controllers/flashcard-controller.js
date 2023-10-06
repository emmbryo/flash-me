/**
 * Flashcard controller.
 *
 * @author Emma Fransson <ef222hr@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Encapsulates a controller.
 */
export class FlashcardController {
  /**
   * Renders a view and sends the rendered HTML string as an HTTP response.
   * index GET.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  index (req, res, next) {
    res.render('home/index')
  }

  /**
   * Renders a view and sends the rendered HTML string as an HTTP response.
   * index GET.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  getCards (req, res, next) {
    res.render('flashcard/deck')
  }

  /**
   * Renders a view and sends the rendered HTML string as an HTTP response.
   * index GET.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  createCard (req, res, next) {
    res.render('flashcard/create')
  }
}
