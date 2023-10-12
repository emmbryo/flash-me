import Word from '../woorden-api/src/js/index.js'

const word = new Word('moeilijk')

async function getInfo () {
  const info = await word.getWordInfo()
  console.log(info)
}

getInfo()