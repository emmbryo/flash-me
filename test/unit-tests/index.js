import Word from '../../woorden-api/src/js/index.js'

const word = new Word('belangrijk')

async function getInfo () {
  const info = await word.getWordInfo()
  console.log(info)
}

getInfo()