"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sortByPrice_1 = require("./services/sortByPrice");
var items = [
    { ID: "1", Name: "Item A", Price: 30 },
    { ID: "2", Name: "Item B", Price: 10 },
    { ID: "3", Name: "Item C", Price: 20 },
];
console.log("Ascending:", (0, sortByPrice_1.sortItemsByPrice)(items, "asc"));
console.log("Descending:", (0, sortByPrice_1.sortItemsByPrice)(items, "desc"));
