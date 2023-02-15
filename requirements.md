# flashcard-manager 1.0.0 module requirements

## Classes - Dictionary, Card, Deck and Library

## Dictionary
This class is the motor of the module, it should generate the information needed about a dutch word.

### Methods
- getInfo(word, config)
  - word: a word from the dutch language, of type string - required
  - config: gives the option to specified what inforamtion about the word that is relevant
    - 'basic': the word with phonetics and examples of use
    - 'extended': basic and synonyms/antonyms
    - 'total': all available information abput the word
  - returns: an object containing the word info

### Dependencies
The class should use the module woorden-api for generating information about a dutch word. https://github.com/emmbryo/woorden-api.git

## Card
This class represent objects of type card. Each instance of this class is thought to act as a template for creating flashcards, containing the details about the card. 

### Fields
- originalWord
  - the word already known to the user, as a string
- word
  - the word to learn and further info about the word, as a string

### Methods

- constructor(word)
- delete

## Deck
This class represent objects of type deck. Each instance of this class is thought to act as holder for object of type card.

### Fields
- name
  - the name of the deck
- cards[]
  - the objects of type cards that belong to the deck

### Methods

- constructor(name)
- addCard(card)
- removeCard(card)
- getCards()

## Library
This class represent objects of type library. Each instance of this class is thought to act as library for all the decks that are used in learning. A user is connected to one library each, but it can contain zero or many decks that in turn contain zero or many cards.

### Fields
- userName
  - name of user, the owner of the library
- decks[]
  - The collection of decks.

### Methods

- constructor(word)
- deleteDeck(name)
