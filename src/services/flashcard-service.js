import { FlashcardRepository } from '../repositories/flashcard-repository.js'
import { WordWrapper } from '../wrapper/WordWrapper.js'

export class FlashcardService {
  /** 
   * @type {FlashcardRepository} 
   */
  #repository
  constructor (repository = new FlashcardRepository()) {
    this.#repository = repository
  }

  getCards () {
    return this.#repository.readData()
  }

  /**
   * @param {string} wordToSearch 
   * @returns {object} the word and its info
   */
  async searchWord (wordToSearch) {
    const word = new WordWrapper(wordToSearch)
    const wordInfo = await word.getWordInfo()

    return {
      word: wordToSearch,
      translation: 'Fill the in word in your source language.',
      gapSentence: this.#createGapSentence(wordToSearch, wordInfo),
      pronunciation: wordInfo.pronunciation,
      sentence: wordInfo.examples,
    }
  }

  /**
   * 
   * @param {string} word 
   * @param {object} wordInfo 
   * @returns {string}
   */
  #createGapSentence (word, wordInfo) {
    const gap = '_'.repeat(word.length)
    const gapSentances = wordInfo.examples.replaceAll(word, gap)

    return gapSentances
  }
  
  getDefaultData () {
    return {
      translation: 'The word translated',
      gapSentence: 'Sentence/sentences with the ____ left out',
      word: 'the word to learn',
      pronunciation: 'word written in IPA',
      sentence: 'The full sentence/sentences'
    }
  }

  /**
   * @param {object} newCard 
   * @returns {object} the card
   */
  saveCard (newCard) {
    const card = {
      id: 0,
      back: { 
        word: newCard.word,
        pronunciation: newCard.pronunciation,
        sentence: newCard.sentence 
      },
      front: {
        translation: newCard.translation,
        gapSentence: newCard['gap-sentence']
      }
    }
    return this.#repository.writeData(card)
  }

  /**
   * @param {string} id 
   */
  deleteCard (id) {
    this.#repository.deleteCard(id)
  }
}