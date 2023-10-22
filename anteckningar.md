## TODO

* spara kortet till .json-filen - OK!
* edit/delete cards
* felhantering om ordet inte finns
* maxgräns på input
* validering av input
* lägga till id, på alla ställen...

## Notes during development
- bindestreck i html, översätts till keys in javascript --> ['key-name']
- Problem: insprängd ejs i vyerna, mycket svårläst, men det är den syntaxen som gäller för ejs, lite klurigt att göra det läsbart. Öpppna upp mer med radbrytningar?
- Problem: Koden rör sig över många filer för varje anrop, vill  man följa händelserna i koden är det ett evigt bläddrande --> namngivning av metoder kan göra att man kan undvika att gå in i en klass för att kolla vad som händer, räcker då att kolla i kontrollern, där allt ges på en övergripande nivå?
- Lägga till repository för att illustrera DB, även om den i detta fall bara kör .json filen?
- html, Hur fasiken ska man kunna göra html läsbart på ett tydligt vis? Det blir snabbt rörigt med element, klasser och id:n all over the place. SPECIELLT om man även slänger in ejs i spelet med javscript insprängt under uppbyggnaden av en html-fil. Här finns det mycket att jobba på ... Men begränsingar också i hur man "måste" göra för att kunna bygga filen så som man vill ha den.
- ? istället för if-satser, lite svårare att förstå, men minskar drastiskt på antalen rader kod, vilket kan göra det lättare att förstå, en avvägning hur mycket man ska använda denna.

## plagiat
- IoCContainer: skrivit själv, men starkt inspirerad av en som gavs till oss av Mats, men denna är förenklad och anpassad till min kod, men har trots detta stora likheter med originalet. Vet inte riktigt hur jag ska klassificera detta. Kan inte riktigt se hur den kan skrivas om utan att man krånglar till den och iom detta ger den "lägre" kvalle