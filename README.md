# kurs-tabell

en angular apk som visar en kurslista för webbutvecklingsprogrammet

## funktioner

- hämtar data från json via httpclient
- visar tabell med kurskod, kursnamn och progression
- sortering genom klick på kolumnrubrik 
- filtrering via sökfält (kod eller namn)
- redirect från `/` till `/kurser`
- hantering av ogiltiga url:er via wildcard redirect
- bygger med standalone-komponenter

## hur man kör lokalt

1. klona projektet:

```bash
git clone https://github.com/arlaspresident/angular2.git
cd angular2
```
2. installera beroenden

```bash
npm install
```
3. starta utvecklingsservern

```bash
ng serve
```

4. öppna i webbläsaren
http://localhost:4200
 

 ## hur det funkar
 - kursdata hämtas från: https://webbutveckling.miun.se/files/ramschema.json
- datan hämtas i en service med httpclient
- komponenten course-table ansvarar för visning av tabellen, filtrering, sortering...