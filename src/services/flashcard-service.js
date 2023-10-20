import fs from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import Word from '../../woorden-api/src/js/index.js'

export class FlashcardService {
  getCards () {
    return this.#readData()
  }

  #readData () {
    const directoryFullName = dirname(fileURLToPath(import.meta.url))
    const filePath = join(directoryFullName, '..', 'data/flashcards.json')
    const data = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(data)
  }

  writeData () {

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

  getDefaultData () {
    return {
      translation: 'The word translated',
      gapSentence: 'Sentence with the ____ left out',
      word: 'the word to learn',
      pronunciation: 'word written in IPA',
      sentence: 'The full sentence'
    }
  }

  saveCard (cardData) {
    const card = {
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
    return card
  }

  #createSentence (wordInfo) {
    const sentances = []
    sentances.push(wordInfo.Voorbeelden ? wordInfo.Voorbeelden : '')
    sentances.push(wordInfo.Voorbeeld ? wordInfo.Voorbeelden : '')
    
    return sentances.toString()
  }

  #createGapSentence(word, wordInfo) {
    const gap = '_'.repeat(word.length)
    const gapSentances = []
    gapSentances.push(wordInfo.Voorbeelden?.replaceAll(word, gap))
    gapSentances.push(wordInfo.Voorbeeld?.replaceAll(word, gap) ? wordInfo.Voorbeeld?.replaceAll(word, gap) : '')

    return gapSentances.toString() 
  }
}