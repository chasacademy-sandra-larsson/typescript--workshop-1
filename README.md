
# Typescript #1: Intro till Typescript 
👋 Se föreläsningen i tisdags ✅ 

**Syftet med denna workshop:** Förstå vad Typescript är och vad det kan användas till. De olika områdena inom Typescrpt som denna workshop fokuserar på:

* Installera Typescript + köra Typescriptkompilatorn. Dv.s setup av ett vanilla TS-projekt i Node
* Primitiva typer + type any
* Objekt med Type eller Interface
* Arrayer
* Funktioner
* Unions 

### Kom igång med vanilla TS-projekt

```
npm init
npm install typescript ts-node
npx tsc --init
npx tsc // bygg om .ts => .js
ts-node index.ts // kör ts-filen i node
```

Ändra i kompilerinsingställningarna (tsconfig.json) vad du vill kompilera JS-filen (outDir) och från vilken mapp du vill kompilera .ts-filerna (include)

Skapa index.ts i en src-mapp och börja sedan övningen :-)


### Bra att veta

Alla uppgifter + extrauppgifter är framåtsyftande mot provet i Typescript i v 44.

Förutom övningen finns även extrauppgifter på externa sidor. Gör dessa för att repetera, få djupare förståelse. För att relatera tll kommande prov anger jag G-nivå eller VG-nivå.

På provet kommer man få använda sig av Typescriptdokumentation, så börja bli vän med den redan nu :-)

[https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)

# 👩🏽‍💻 Övning: Ange typer istället för "any" 

G-nivå

**Din uppgift:**

1. Sätt upp ett TS-projekt med npx (se ovan)
1. Utgå från index.ts och ersätt alla "any" med passande typ.
1. Åtgärda även det som står i kommentarerna


# 🏃🏽‍♂️ Extrauppgifter

Välj och vraka efter eget tycke :-)


1. [https://www.totaltypescript.com/tutorials/beginners-typescript
  ](https://www.totaltypescript.com/tutorials/beginners-typescript) Uppgift 1-8 G-nivå
2. [https://typescript-exercises.github.io/](https://typescript-exercises.github.io/) Uppgift 1-4 G-nivå
3. [https://github.com/LearningTypeScript/projects](https://github.com/LearningTypeScript/projects) - Följer [denna O'really bok](https://www.oreilly.com/library/view/learning-typescript/9781098110321/?_gl=1*pv2bzi*_ga*MTgzNjg0Njk0Ny4xNjk1MDMwMDU5*_ga_092EL089CH*MTY5NTIxMjAxOS4yLjEuMTY5NTIxMjIzNS40MS4wLjA.), men du måste inte ha boken. Utgå från mappar "The type system", "Union and Literals", Objects, Functions, Arrays. De delar in övningarna Appertizer (= G-nivå), Entrees (VG-nivå), Desserts (VG-nivå)
4. Gör om en befintligt vanilla JS projekt till vanilla TS projekt (i lagom omfattning VG-nivå)




# ✅ Redovisning:
* Du redovisar minst uppgiften för övningen. 
* ***Om du inte kan delta på workshopen, redovisar du ovanstående nästkommande workshop***







