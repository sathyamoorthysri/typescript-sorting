import { Item } from "./types/product";
import { sortItemsByPrice } from "./services/sortByPrice";

const items: Item[] = [
  { ID: "1", Name: "Item A", Price: 30 },
  { ID: "2", Name: "Item B", Price: 10 },
  { ID: "3", Name: "Item C", Price: 20 },
];

console.log("Ascending:", sortItemsByPrice(items, "asc"));
console.log("Descending:", sortItemsByPrice(items, "desc"));