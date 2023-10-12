# flash-me 1.0.0 requirements

The flash-me application is a "flash card app" intended to help with learning languages, in particular dutch. 

## Functional requirements

Initially the application is made very simple with no login for user. All needed information is saved in a .json file, shared by all users of a particualr instance of the application.

### 1. Starting point
#### 1.1 - View
The user is met by a simple interface containing:
* Button: see flashcards
* Button: create flashcard

### 2. See flashcards
#### 2.1 - Storage
* The application uses no database in this initial state, the previously made flashcards are stored as json in a .json file.
#### 2.2 - Display
* The .json file is read and the application generates a visual representation of the stored data in the form of flashcards.

### 3. Create flashcard
#### 3.1 - View
* Box to fill in the desired word
* Two buttons: 
  * Get word info - search info on the given word
  * Back - to go back to main menu
  * Create - to create the card and save its contents to the .json file
#### 3.2 - Choose a word
* The user is given the choice to enter a dutch word in the box and press get info
* If info on the word is available, the info is displayed in a list
* The user can then choose what to include on the card from the following:
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
  * One with the word  
  * The other with clues to which word it is
#### 4.2 - Edit
* A button: Edit
* When clicked:
  * All information on the card can be changed, they appear as text in text boxes
  * a button: Save
  * a button: Back
#### 4.3 - Delete
* A button: Delete
* When pressed, the card is deleted