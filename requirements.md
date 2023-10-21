# flash-me 1.0.0 vision and requirements

The flash-me application is a "flash card app" intended to help with learning languages, in particular dutch. 

## Vision
The goal is to create an appplication for learning langugaes with the use of flashcards, especially dutch with the usage of the module woorden-api.
It shall be possible for the user to create flashcards, either by filling in all the information by themselves, or by searching for a dutch word in the application. The information on that word is then gathered from the woorden.org online dutch dictionary, via the woorden-api package, and then filled in for the card to create. The user can then choose to edit or change the information before saving the card.

The saved cards can then be used to train the vocabulary. 

## Technical requirements
- Server side rendered app

### Techniques
- javascript, ejs, css
- [express.js](https://expressjs.com)
- [woorden-api](https://github.com/emmbryo/woorden-api)
- testing: [jest](https://jestjs.io)
- version handling via [github.com/emmbryo/flash-me](https://github.com/emmbryo/flash-me) 

## Functional requirements

Initially the application is made very simple with no login for the user. The information about the users flashcards is saved in a .json file, shared by all users of a particualr instance of the application.

### 1. Starting point
#### 1.1 - View
The user is met by a simple interface containing:
* Button: show cards
* Button: create card

### 2. Show cards
#### 2.1 - Storage
* The application uses no database in this initial state, the previously made flashcards are stored as json in a .json file.
#### 2.2 - Display
* The .json file is read and the application generates a visual representation of the stored data in the form of flashcards.

### 3. Create card
#### 3.1 - View
* Box to fill in the desired word
* Two options: 
  * Get word info - search info on the given word
  * Create - to create the card and save its contents to the .json file
#### 3.2 - Choose a word
* The user is given the choice to enter a dutch word in the box and press get info
* If info on the word is available, the info is filled in to the sumbmission form for the card
* If no info available, an error is shown and the user can try again
* If successful: The user can then choose what to include on the card, by editing the form, from the following:
  * The word to learn
  * Translation
  * Pronounciation
  * Example sentances, with or without the word missing

#### 3.3 - Module for getting word info
* The application uses the woorden-api to retrieve information about the word and fills in the desired parameters.

#### 3.4 - Generate flashcard
* A flashcard is generated when the user presses the Create button
* The information about the card is saved to the .json file
* The user is presented with the new card. 

### 4. The flashcard
#### 4.1 - Design
* The card consists of two sides
  * One with the word in the source language and sentance/sentences in the target language with the word missing
  * The other with the word to learn (target language), it's pronunciation and the full sentance/sentances 
#### 4.2 - Edit
* A button: Edit
* When clicked:
  * All information on the card can be changed, they appear as text in text boxes
  * a button: Save - same functionality as when a new card is created
#### 4.3 - Delete
* A button: Delete
* When pressed, the card is deleted