---
layout: post
title: "JavaScript Operatoren"
date: 2025-02-23 00:32:05 +0100
categories: [posts]
published: true
excerpt: "Das ist <strong>mein</strong> benutzerdefiniertes Excerpt."
---

## JavaScript: Unterschied zwischen `?.`, `&&`, `||` und `??`

### 1️⃣ `?.` (Optional Chaining) – Sicherer Zugriff auf geschachtelte Werte

Der Optionale Chaining-Operator (`?.`) wird verwendet, um auf verschachtelte Objekte oder Arrays zuzugreifen, ohne dass ein Fehler auftritt, falls eine Eigenschaft oder ein Index nicht existiert.

#### Ohne `?.` (führt zu einem Fehler):

```javascript
const item = null;
console.log(item.title); // FEHLER: Kann nicht auf `title` zugreifen, weil `item` null ist!
```

#### Mit `?.` (verhindert den Fehler):

```javascript
const item = null;
console.log(item?.title); // Gibt `undefined` zurück, statt einen Fehler zu werfen.
```

### Erklärung der `?.`-Verwendungen im Code

| Stelle im Code                                   | Bedeutung                                                                                                                                                                                                                                          |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `subMenuData?.items`                             | Prüft, ob `subMenuData` existiert, bevor `items` ausgelesen wird. Falls `subMenuData` `null` oder `undefined` ist, gibt es direkt `undefined` zurück.                                                                                              |
| `item?.title?.trim()`                            | Falls `item` existiert, greift es auf `title` zu. Falls `title` existiert, wird `trim()` angewendet. Falls `item` oder `title` nicht existieren, gibt es `undefined` zurück, ohne einen Fehler zu verursachen.                                     |
| `actualIcons?.icons?.[parseInt(item.iconIndex)]` | Falls `actualIcons` und `icons` existieren, greift es auf das Icon mit dem entsprechenden Index zu. Falls eines davon `null` oder `undefined` ist, wird die ganze Kette gestoppt und gibt `undefined` zurück, anstatt einen Fehler zu verursachen. |

Besonders nützlich, wenn `data.values` manchmal nicht existiert, z. B. wenn eine API keine Werte liefert.

### 2️⃣ `&&` (Logisches UND)

`&&` wird verwendet, um eine Bedingung zu prüfen: Wenn der erste Wert `true` ist, wird der zweite Wert zurückgegeben.

#### Beispiel:

```javascript
const name = "Max";
console.log(name && "Hallo"); // "Hallo"

const empty = "";
console.log(empty && "Hallo"); // "" (weil empty leer ist)
```

Hilfreich für das bedingte Rendern in React:

```javascript
{
  isAdmin && <p> Willkommen, Admin! </p>;
}
```

Zeigt den `<p>`-Tag **nur an**, wenn `isAdmin` `true` ist.

### 3️⃣ `||` (Logisches ODER – Fallback-Wert)

`||` wird verwendet, um einen Standardwert festzulegen, falls der erste Wert "falsy" ist (`null`, `undefined`, `false`, `0`, `NaN`, `""`).

#### Beispiel:

```javascript
const userInput = "";
console.log(userInput || "Standardwert"); // "Standardwert"

const validInput = "Hallo";
console.log(validInput || "Standardwert"); // "Hallo"
```

Setzt einen Fallback-Wert, falls der erste Wert leer oder `false` ist.

### 4️⃣ `??` (Nullish Coalescing Operator) – Standardwerte setzen

Der Nullish Coalescing Operator (`??`) wird verwendet, um einen Fallback-Wert **nur dann** zu setzen, wenn der vorherige Wert `null` oder `undefined` ist.

#### Unterschied zu `||`

```javascript
const value = 0 || "Fallback"; // Ergebnis: "Fallback" (weil 0 falsy ist)
const value2 = 0 ?? "Fallback"; // Ergebnis: 0 (weil `0` nicht `null` oder `undefined` ist)
```

Problem: Falls `0` oder `""` als gültige Werte existieren, würden sie mit `||` fälschlicherweise ersetzt. `??` vermeidet das Problem.

Mit `??` – Nur `null` oder `undefined` triggern den Fallback

```javascript
const value = undefined ?? "Fallback"; // "Fallback"
const value2 = null ?? "Fallback"; // "Fallback"
const value3 = "" ?? "Fallback"; // "" (KEIN Fallback!)
const value4 = 0 ?? "Fallback"; // 0 (KEIN Fallback!)
```

Kombination in deinem Code:

```javascript
const subMenuTitles1 = data?.[5] ?? []; // Falls `data` nicht existiert, wird ein leeres Array `[]` gesetzt
```

`data?.[5]` stellt sicher, dass kein Fehler passiert, wenn `data` nicht existiert.  
`?? []` sorgt dafür, dass `subMenuTitles1` **immer ein Array ist**, selbst wenn `data?.[5]` `undefined` zurückgibt.

### 5️⃣ Fazit – Wann sollte man was nutzen?

| Operator                  | Bedeutung                                                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `?.` (Optional Chaining)  | Falls der Wert existiert, greife darauf zu. Falls nicht, gib `undefined` zurück, anstatt einen Fehler zu werfen. |
| `&&` (Logisches UND)      | Um Inhalte nur anzuzeigen, wenn eine Bedingung `true` ist.                                                       |
| `\|\|` (Logisches ODER)   | Um falsy Werte (`0`, `false`, `null`, `undefined`, `""`) zu ersetzen.                                            |
| `??` (Nullish Coalescing) | Nur `null` oder `undefined` ersetzen, aber `0` und `false` beibehalten.                                          |
