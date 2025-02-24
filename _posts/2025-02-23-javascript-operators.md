---
layout: post
title: "JavaScript Operators: Explanation and Best Practices"
date: 2025-02-23 00:32:05 +0100
categories: [posts]
published: true
excerpt: "A detailed guide on the essential <strong>JavaScript operators</strong> with examples and best practices."
---

# JavaScript: Understanding `?.`, `&&`, `||`, and `??`

## 1️⃣ `?.` (Optional Chaining) – Safe Access to Nested Values

The optional chaining operator (`?.`) allows access to properties within nested objects or arrays without causing errors if a property or index does not exist.

### Without `?.` (Causes an Error)

```javascript
const item = null;
console.log(item.title); // ERROR: Cannot read properties of null!
```

### With `?.` (Prevents the Error)

```javascript
const item = null;
console.log(item?.title); // Returns `undefined` instead of throwing an error.
```

### Explanation of `?.` in Code

| Code Example                                     | Meaning                                                                                                                                                                              |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subMenuData?.items`                             | Checks if `subMenuData` exists before accessing `items`. If `subMenuData` is `null` or `undefined`, it immediately returns `undefined`.                                              |
| `item?.title?.trim()`                            | If `item` exists, it accesses `title`. If `title` exists, `trim()` is applied. If either is missing, `undefined` is returned without causing an error.                               |
| `actualIcons?.icons?.[parseInt(item.iconIndex)]` | Checks if `actualIcons` and `icons` exist before accessing the icon at the specified index. If either is `null` or `undefined`, it returns `undefined` instead of throwing an error. |

This is particularly useful when working with API responses where certain properties may not always be present.

---

## 2️⃣ `&&` (Logical AND)

The `&&` operator evaluates conditions and returns the second value only if the first one is truthy.

### Example

```javascript
const name = "Max";
console.log(name && "Hello"); // "Hello"

const empty = "";
console.log(empty && "Hello"); // "" (since `empty` is falsy)
```

### Conditional Rendering in React

```javascript
{
  isAdmin && <p>Welcome, Admin!</p>;
}
```

The `<p>` tag **only appears** if `isAdmin` is `true`.

---

## 3️⃣ `||` (Logical OR – Fallback Value)

The `||` operator sets a default value if the first operand is falsy (`null`, `undefined`, `false`, `0`, `NaN`, `""`).

### Example

```javascript
const userInput = "";
console.log(userInput || "Default value"); // "Default value"

const validInput = "Hello";
console.log(validInput || "Default value"); // "Hello"
```

Use `||` to assign fallback values when dealing with user input or missing data.

---

## 4️⃣ `??` (Nullish Coalescing Operator) – Setting Default Values

The `??` operator provides a default value **only if** the left-hand operand is `null` or `undefined`.

### Difference from `||`

```javascript
const value = 0 || "Fallback"; // Result: "Fallback" (since 0 is falsy)
const value2 = 0 ?? "Fallback"; // Result: 0 (since `0` is NOT `null` or `undefined`)
```

⚠ **Issue with `||`:** If `0` or `""` are valid values, they will still be replaced. `??` ensures only `null` or `undefined` trigger the fallback.

### Using `??` – Only `null` or `undefined` trigger the fallback

```javascript
const value = undefined ?? "Fallback"; // "Fallback"
const value2 = null ?? "Fallback"; // "Fallback"
const value3 = "" ?? "Fallback"; // "" (NO fallback!)
const value4 = 0 ?? "Fallback"; // 0 (NO fallback!)
```

### Common Use Case

```javascript
const subMenuTitles1 = data?.[5] ?? []; // Ensures `subMenuTitles1` is always an array
```

Here:

- `data?.[5]` ensures `data` exists before accessing index `5`.
- `?? []` ensures that if `data?.[5]` is `null` or `undefined`, it defaults to an empty array.

---

## 5️⃣ Conclusion – When to Use Which Operator?

| Operator                  | Purpose                                                                        |
| ------------------------- | ------------------------------------------------------------------------------ |
| `?.` (Optional Chaining)  | Access properties safely without throwing errors.                              |
| `&&` (Logical AND)        | Render or execute code only when the first condition is `true`.                |
| &#124;&#124; (Logical OR) | Assign a fallback value for any falsy condition.                               |
| `??` (Nullish Coalescing) | Assign a fallback value **only if** the left operand is `null` or `undefined`. |

By understanding and using these operators properly, you can write cleaner, more robust JavaScript code. 🚀
