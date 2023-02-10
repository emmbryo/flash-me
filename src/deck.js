/**
 * Word module.
 *
 * @author Emma Fransson <info@emmbryo.se>
 * @version 1.0.0
 */

export class Deck {
  /**
   * The name of the deck.
   *
   * @type {string}
   */
  #name = 'standard'

  /**
   * A description about the deck, theme, purpose etc.
   *
   * @type {string}
   */
  #description 

  /**
   * Array with the cards of the deck.
   *
   * @type {object}
   */
  #cards = [1, 2, 3]

  /**
   * When initiating an object of type deck, name and/or description can be given.
   *
   * @param {string} name 
   */
  constructor (name, description) {
    this.#name = name
    this.#description = description
  }

  addCard (card) {
    // validation
    console.log('deleted: ', card)
  }

  removeCard (card) {
    this.#cards.remove(card)
  }

  getCards () {
    const copy = []
    this.#cards.forEach (card => {
      copy.push(card.toString())
    })
    return copy
  }

  /**
   * @param {string | any[]} value
   */
  set name (value) {
    if (typeof value != 'string') {
      throw new Error('Input must be a string')
    }
    if (value.length < 1 || value.length > 100) {
      throw new RangeError('Input must be between 1 and 100 characters long')
    }
    this.#name = value
  }

  /**
   * @param {string | any[]} value
   */
  set description (value) {
    if (typeof value != 'string') {
      throw new Error('Input must be a string')
    }
    if (value.length < 1 || value.length > 300) {
      throw new RangeError('Input must be between 1 and 300 characters long')
    }
    this.#description = value
  }

  get name () {
    return this.#name
  }

  get description () {
    return this.#description
  }
}