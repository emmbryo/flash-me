/*
 * Wrapper class for woorden-api module
 */
import { Word } from '../../woorden-api/src/js/index.js'

export class WordWrapper {
  #word
  constructor (word) {
    this.#word = new Word(word)
  }

  async getWordInfo () {
    try {
      const wordInfo = await this.#word.getWordInfo()
      return this.#transformWordInfo(wordInfo)
  
    } catch (error) {
      if (!error.message.includes('characters') || !error.message.includes('spelling')) {
        throw new Error('Unfortunately a connection to woorden.org could not be made, please fill in the word info manually.')
      } else {
        throw new Error(error.message)
      }
    }
  }

  #transformWordInfo (wordInfo) {
    const example = wordInfo.Voorbeeld ? wordInfo.Voorbeeld : ''
    const examples = wordInfo.Voorbeelden ? wordInfo.Voorbeelden : ''
    
    return {
      pronunciation: wordInfo.Uitspraak ? wordInfo.Uitspraak : '',
      examples: `${example} ${examples}`
    }
  }

}