"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortItemsByPrice = sortItemsByPrice;
function sortItemsByPrice(items, direction) {
    return items.sort(function (a, b) {
        if (direction === "asc") {
            return a.Price - b.Price;
        }
        else {
            return b.Price - a.Price;
        }
    });
}
