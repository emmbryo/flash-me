# Reflektioner baserat på boken Clean code av Robert C. Martin

## Kapitel 2: Meningsfulla namn (meaningful names)
Att vara konsekvent i sin namngivning är en viktig aspekt för att undvika förvirring, men jag upptäckte att jag inte namngett mina klasser enligt den principen. Nu handlar det förvisso om en klass i test-delen av applikationen, men tycker ändå det var interssant att se att jag helt plötsligt använt PascalCase för FlascardServiceMock, men använt bindestreck för alla andra klasser; flashcard-service.js, flashcard-service.test.js. En princip att följa är att klassens namn är samma namn som man ger filen, så i detta fall bör jag döpa om min klasser så att de matchar klassernas namn som är skrivna i camelCase.

<img src="./reflection-images/chapter2_names/naming_1.png" width="200px">

<hr>

Namngivning av variabler kan vara riltigt lurigt och vad som är självklart för mig, som skrivit koden, behöver inte vara självklart rent objektivt sätt. Namnen ska som boken uttrycker det: reveal intent, alltså det ska på ett tydligt sätt beskriva sin innebörd. Jag brottades med ett speciellt variabelnamn. När användaren söker efter ett namn, så sparas sökordet i en variabel som sedan skickas genom applikationens struktur fram till den plats i koden som själva sökningen görs.

#### In the view create.js, displaying the form where the word is given by the user
<img src="./reflection-images/chapter2_names/naming_2.png" width="600px">

#### In the class flashcard-controller.js:
<img src="./reflection-images/chapter2_names/naming_3.png" width="600px">

#### In the class flashcard-service.js:
<img src="./reflection-images/chapter2_names/naming_4.png" width="600px">

Att, som i de första två exemplen (som egentligen bara är ett och samma exempel, eftersom req.body.search kommer från name="search"), enbart kalla parametern för search indikerar förvisso att det är ngt som ska sökas på, men det blir bra mycket tydligare i service-klassen, där det istället benämns som wordToSearch. Namnet blir dubbelt så långt, men inte tillräckligt för att påverka läsbarheten, men det tillför viktig information att det rör sig om ett ord, vilket indirekt också kan tolkas som en sträng. 

<hr>


## Kapitel 3: Funktioner (Functions)
## Kapitel 4: Kommentarer (Comments)
Eftersom javascript är ett löst typat språk så kan det vara bra med kommentarer som listar typerna för metoders parametrar, för att underlätta förståelsen när det kommer till vad som accepteras av metoden. Så i detta fall tillför kommentarerna ny information, vilket enligt boken är ett krav för att kunna försvara en kommentars existens. I min controller-klass så används samma parametrar för alla metoder, så jag valde där att göra en sammanfattande kommentar med parametrar för alla klasser. Detta resulterar i några få (nödvändiga?) rader som ger ny info, istället för att lista samma parametrar för varje enskild metod. 

<img src="./reflection-images/chapter4_comments/comments_1.png" width="400px">

I bilden ovan finns även en kommentar till konstruktorn, där typen för parametern listas, vilket tydliggör exakt vad det är som skall skickas med. Men det ges även ett default-värde i konstruktorn med:
```javascript
const service = new FlashcardService()
```
Så frågan man kan ställa sig här är om denna kommentar faktiskt tillför någon info, eller om det är fullt tillräckligt att inspektera default-parametern i kontruktorn för att kunna ta till sig nödvändig info rörande parameterns typ. MEn å andra sidan, om man tar bort kommentarer så öppnar man upp för att konstruktorn även skulle kunna ta in en service av annan typ, så i och med att lägga på en kommentar så tar man bort alla tvivel huruvida den är tänkt att ta en parameter av annan typ.

## Kapitel 5: Formattering (Formatting)
Vertikala strukturer
Radbrytning horisontellt 
Grupperingar av segment

## Kapitel 6: Objekt och datastrukturer (Objects and Data Structures)
## Kapitel 7: Felhantering (Error Handling)
Hur hantera felen från woorden-api, egna undantag
## Kapitel 8: Gränser (Boundaries)
Användandet av woorden-api
## Kapitel 9: Enhetstester (Unit Tests)
## Kapitel 10: Klasser (Classes)
Storlek, ansvarsområden
## Kapitel 11: System (Systems)

