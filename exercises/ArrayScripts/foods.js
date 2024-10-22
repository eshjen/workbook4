"use strict";
//Exercise 3
let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

let total = 0;
for (let index = 0; index < lunch.length; index++) {
    const element = lunch[index];
total = total + element.price

}

