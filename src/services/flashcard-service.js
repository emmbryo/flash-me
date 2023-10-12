// import flashcards from '../data/flashcards.js'
import fs from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import Word from '../../woorden-api/src/js/index.js'

export class FlashcardService {
  getCards () {
    return this.readData()
  }


  readData () {
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
    return wordInfo
  }
}