import fs from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import Word from '../../woorden-api/src/js/index.js'

export class FlashcardService {
  #dataFile
  #relativePath
  constructor (relativePath = '..', dataFile = 'data/flashcards.json') {
    this.#dataFile = dataFile
    this.#relativePath = relativePath
  }

  getCards () {
    return this.#readData()
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
    
    return this.#writeData(card)
  }

  deleteCard (id) {
    const cards = this.#readData()
    this.#removeCard(id, cards)
  
    const jsonData = JSON.stringify(cards, 2, null)

    const directoryFullName = dirname(fileURLToPath(import.meta.url))
    const filePath = join(directoryFullName, this.#relativePath, this.#dataFile)

    fs.writeFileSync(filePath, jsonData, 'utf-8')
  }

  #removeCard (id, cards) {
    let cardIdentified = false
    let i = 0
    while (!cardIdentified && i < cards.length) {
      if (cards[i].id === id) {
        cardIdentified = true
      }
      i++
    }
    cards.splice(i - 1, 1)
  }

  #createSentence (wordInfo) {
    const sentances = []
    sentances.push(wordInfo.Voorbeelden ? wordInfo.Voorbeelden : '')
    sentances.push(wordInfo.Voorbeeld ? wordInfo.Voorbeeld : '')
    
    return sentances.toString()
  }

  #createGapSentence (word, wordInfo) {
    const gap = '_'.repeat(word.length)
    const gapSentances = []
    gapSentances.push(wordInfo.Voorbeelden?.replaceAll(word, gap))
    gapSentances.push(wordInfo.Voorbeeld?.replaceAll(word, gap) ? wordInfo.Voorbeeld?.replaceAll(word, gap) : '')

    return gapSentances.toString() 
  }

  #readData () {
    const directoryFullName = dirname(fileURLToPath(import.meta.url))
    const filePath = join(directoryFullName, this.#relativePath, this.#dataFile)
    const data = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(data)
  }

  #writeData (cardData) {
    const cards = this.#readData()
    cardData.id = `${cards.length + 1}`
    cards.push(cardData)
    const jsonData = JSON.stringify(cards, null, 2)

    const directoryFullName = dirname(fileURLToPath(import.meta.url))
    const filePath = join(directoryFullName, this.#relativePath, this.#dataFile)

    fs.writeFileSync(filePath, jsonData, 'utf-8')

    return cardData
  }
}