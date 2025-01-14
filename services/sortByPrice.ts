import { Item } from "../types/product";

export function sortItemsByPrice(items: Item[], direction: "asc" | "desc"): Item[] {
  return items.sort((a, b) => {
    if (direction === "asc") {
      return a.Price - b.Price;
    } else {
      return b.Price - a.Price;
    }
  });
}