import { FlashcardService } from '../../../src/services/flashcard-service'

export class FlashcardServiceMock extends FlashcardService {

  getCards () {
    return [{}, {}, {}]
  }

  async searchWord (wordToSearch) {
    return {
      Woord: wordToSearch,
      Uitspraak:   '[bəˈlɑŋrɛik]',
      Afbreekpatroon:   'be·lang·rijk',
      Verbuigingen:   'belangrijkst',
      Voorbeelden:   '`een belangrijke dag`,`een belangrijke persoon`,`de dingen belangrijker maken dan ze zijn` ',
      Antoniem:   'onbelangrijk'
    }
  }

  saveCard (cardData) {
    return {
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
  }
}