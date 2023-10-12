# Reflektion 
based on Clean Code by 


Gå igenom all kod inklusive kod från laboration 1 och uppdatera enligt bokens clean code
kapitel 2-11 och det vi diskuterat på föreläsningar och workshops. Skriv en kort (4-6
meningar) reflektion för varje kapitel om hur just det kapitlet har påverkat eller inte påverkat
din kod. Använd bokens termer. Ge exempel med läsbara screenshots från er kod till varje
reflektion.


## kap 2 - Meaningful names
namngivning, namngivning, namngivning...
## kap 3 - Functions
## kap 4 - Comments
## kap 5 - Formatting
## kap 6 - Objects and Data Structures
## kap 7 - Error handling
## kap 8 - Boundaries
## kap 9 - Unit tests
## kap 10 - Classes
## kap 11 - Systems


## Notes during development
- body för söka ord: search --> word bättre för förståelsen när man följer inblandade metoder?
- i service: searchWOrd: wordToSearch för att separera från const word = new Word(word-ish)
- Sammanfattande parametrer kommentarer för req, res, next --> onödigt att upprepa för varje enskild metod när de ändå använder samma params.
- Problem: insprängd ejs i vyerna, mycket svårläst, men det är den syntaxen som gäller för ejs, lite klurigt att göra det läsbart. Öpppna upp mer med radbrytningar?
- Problem: Koden rör sig över mpnga filer för varje anrop, vill  man följa händelserna i koden är det ett evigt bläddrande --> namngivning av metoder kan göra att man kan undvika att gå in i en klass för att kolla vad som händer, räcker då att kolla i kontrollern, där allt ges på en övergripande nivå?
- Lägga till repository för att illustrera DB, även om den i detta fall bara kör .json filen?