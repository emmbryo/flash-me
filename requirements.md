# flash-me 1.0.0 requirements

The flash-me application is a "flash card app" intended to help with learning languages, in particular dutch. 

## Functional requirements

Initially the application is made very simple with no login for user. All needed information is saved in a .json file, shared by all users of a particualr instance of the application.

### 1. Starting point
#### 1.1 - View
The user is met by a simple interface containing:
* Button: see flashcards
* Button: new flashcard

### 2. See flashcards
#### 2.1 - Storage
* The application uses no database in this initial state, the previously made flashcards are stored as json objects in a .json file.
#### 2.2 - Display
* The .json file is read and the application generates a visual representation of the stored data in the form of flashcards.

### 3. New flashcard
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
  * Pronounciation
  * Example sentances, with the word missing (default)
#### 3.3 - Module for getting word info
* The application uses the woorden-api to retrieve information about the word and fills in the desired parameter.
#### 3.4 - Generate flashcard
* A flashcard is generated when the user presses the Create button
* The user is presented with the new card. 

### 4. The flashcard
#### 4.1 - Design
#### 4.2 - Edit
#### 4.3 - Delete