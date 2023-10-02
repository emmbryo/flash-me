import { Word } from '../woorden-api/src/js/word.js'

const word = new Word('paard')

async function getInfo () {
  const info = await word.getWordInfo()
  console.log(info)
}

getInfo()