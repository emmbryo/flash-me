import { FlashcardRepository } from '../repositories/flashcard-repository.js'
import { WordWrapper } from '../wrapper/WordWrapper.js'

export class FlashcardService {
  #repository
  constructor (repository = new FlashcardRepository()) {
    this.#repository = repository
  }

  getCards () {
    return this.#repository.readData()
  }

  async searchWord (wordToSearch) {
    const word = new WordWrapper(wordToSearch)
    const wordInfo = await word.getWordInfo()
    return {
      translation: 'Fill the in word in your source language.',
      gapSentence: this.#createGapSentence(wordToSearch, wordInfo),
      word: wordToSearch,
      pronunciation: wordInfo.Uitspraak,
      sentence: this.#createSentence(wordInfo),
    }
  }

  #createGapSentence (word, wordInfo) {
    const gap = '_'.repeat(word.length)
    const gapSentances = []
    gapSentances.push(wordInfo.Voorbeelden?.replaceAll(word, gap))
    gapSentances.push(wordInfo.Voorbeeld?.replaceAll(word, gap) ? wordInfo.Voorbeeld?.replaceAll(word, gap) : '')

    return gapSentances.toString() 
  }
  
  #createSentence (wordInfo) {
    const sentances = []
    sentances.push(wordInfo.Voorbeelden ? wordInfo.Voorbeelden : '')
    sentances.push(wordInfo.Voorbeeld ? wordInfo.Voorbeeld : '')
    
    return sentances.toString()
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

  deleteCard (id) {
    this.#repository.deleteCard(id)
  }

}