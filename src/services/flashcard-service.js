import fs from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { FlashcardRepository } from '../repositories/flashcard-repository.js'
import Word from '../../woorden-api/src/js/index.js'

export class FlashcardService {
  #repository
  constructor (repository = new FlashcardRepository()) {
    this.#repository = repository
  }

  getCards () {
    return this.#repository.readData()
  }

  async searchWord (wordToSearch) {
    const word = new Word(wordToSearch)
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

  saveCard (cardData) {
    const card = {
      id: 0,
      back: { 
        word: cardData.word,
        pronunciation: cardData.pronunciation,
        sentence: cardData.sentence 
      },
      front: {
        translation: cardData.translation,
        gapSentence: cardData['gap-sentence']
      }
    }
    return this.#repository.writeData(card)
  }

  deleteCard (id) {
    this.#repository.deleteCard(id)
  }

}