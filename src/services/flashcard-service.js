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
      gapSentence: `${wordInfo.Voorbeelden} ${wordInfo.Voorbeeld}`,
      word: wordToSearch,
      pronunciation: wordInfo.Uitspraak,
      sentence: `${wordInfo.Voorbeelden} ${wordInfo.Voorbeeld}`,
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
}