# Sorting Items by Price

This project demonstrates how to modularize a TypeScript application for sorting items based on their price in ascending or descending order. The code is organized into separate modules for type definitions, business logic, and execution.

---

## **Folder Structure**
```plaintext
/typescript-sorting
├── node_modules/       // Dependencies (auto-generated by npm)
├── services/           // Contains business logic
│   ├── sortByPrice.ts  // Sorting logic (TypeScript)
│   ├── sortByPrice.js  // Sorting logic (Compiled JavaScript)
├── types/              // Contains type definitions
│   ├── product.ts      // Type definition for Product (TypeScript)
│   ├── product.js      // Type definition (Compiled JavaScript)
├── sorting-demo.ts      // Main script (TypeScript)
├── sorting-demo.js      // Main script (Compiled JavaScript)
```

---

## **Files Description**
### 1. `types/product.ts`
Defines the `Item` type:
```typescript
export type Item = {
  ID: string;
  Name: string;
  Price: number; 
};
```

### 2. `services/sortByPrice.ts`
Contains the `sortItemsByPrice` function, which sorts items based on the provided direction (`asc` or `desc`):
```typescript
import { Item } from "../types/product";

export function sortItemsByPrice(items: Item[], direction: "asc" | "desc"): Item[] {
  return items.sort((a, b) => {
    return direction === "asc" ? a.Price - b.Price : b.Price - a.Price;
  });
}
```

### 3. `sorting-demo.ts`
Provides sample input data, imports the `sortItemsByPrice` function, and logs the sorted results:
```typescript
import { Item } from "./types/product";
import { sortItemsByPrice } from "./services/sortByPrice";

const items: Item[] = [
  { ID: "1", Name: "Item A", Price: 30 },
  { ID: "2", Name: "Item B", Price: 10 },
  { ID: "3", Name: "Item C", Price: 20 },
];

console.log("Ascending:", sortItemsByPrice(items, "asc"));
console.log("Descending:", sortItemsByPrice(items, "desc"));
```

---

## **Setup Instructions**

### **Step 1: Install Dependencies**
Make sure TypeScript is installed globally:
```bash
npm install -g typescript
```

### **Step 2: Compile TypeScript Files**
Compile all `.ts` files in the project folder:
```bash
tsc
```
This will generate corresponding `.js` files.

### **Step 3: Run the Code**
Use Node.js to execute the compiled `sorting-demo.js` file:
```bash
node sorting-demo.js
```

---

## **Expected Output**
When you run the `sorting-demo.js` file, you should see the following output:
```plaintext
Ascending: [
  { ID: '2', Name: 'Item B', Price: 10 },
  { ID: '3', Name: 'Item C', Price: 20 },
  { ID: '1', Name: 'Item A', Price: 30 }
]
Descending: [
  { ID: '1', Name: 'Item A', Price: 30 },
  { ID: '3', Name: 'Item C', Price: 20 },
  { ID: '2', Name: 'Item B', Price: 10 }
]
```
