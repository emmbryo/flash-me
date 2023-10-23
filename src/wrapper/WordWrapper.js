import Word from '../../woorden-api/src/js/index.js'

export class WordWrapper {
  #word
  constructor (word) {
    this.#word = new Word(word)
  }

  getWordInfo () {
    try {
      return this.#word.getWordInfo()
    } catch (error) {
      if (!error.message.includes('characters') || !error.message.includes('spelling')) {
        throw new Error('Unfortunately a connection to woorden.org could not be made, please fill in the word info manually.')
      } else {
        throw new Error(error.message)
      }
    }
  }

}