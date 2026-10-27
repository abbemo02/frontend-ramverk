#Namn: Abdullahi Mohamed

## Om projektet

Det här är min inlämningsuppgift där jag har byggt en reaktiv katalogapplikation inspirerad av Crunchyroll. Appen är utvecklad i SolidJs med Vite och visar upp ett urval av populära anime- och mangatitlar tillsammans med en fungerande sökfunktion.

## Uppfyllda krav för Betyg G

I projektet har jag implementerat följande delar från kravlistan:

- **Komponenter**: Appen är uppdelad i återanvändbara komponenter (`App` och `Kort`).
- **Databindning & Props**: Data skickas som `props` till `Kort`-komponenten och binds till sökfältets värde.
- **Tillståndshantering (State)**: Använder `createSignal` från SolidJS för att reaktivt hantera söktillståndet.
- **Eventhantering**: `onInput`-event uppdaterar sökningen dynamiskt i realtid när användaren skriver.
- **Loop-rendering**: Använder SolidJS `<For>`-komponent för att rendera listan över kort.
- **Villkorlig rendering**: Använder SolidJS `<Show>`-komponent för att visa meddelandet *"Inget hittades."* om sökningen inte ger några träffar.
- **Styling**: Anpassad design med CSS-variabler och responsiv layout.

---

## Hur man kör projektet lokalt

1. Klona repositoryt eller ladda ner projektfilerna.
2. Öppna terminalen i projektmappen och installera "npm install"