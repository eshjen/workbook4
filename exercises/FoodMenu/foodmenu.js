"use strict";
let menu = {
  drinks: ["Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"],
  entrees: [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate",
  ],
  desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"],
};

let categoryItems = document.getElementById("categoryItems");
let categoryItems2 = document.getElementById("categoryItems2");

function showDetails() {
    categoryItems2.innerHTML = ""
  for (const item in menu) {
    console.log(item);
    console.log(categoryItems.value);
    
    if (categoryItems.value == item) {
      for (const detailedItem of menu[item]) {
        console.log(detailedItem);
        let option = document.createElement("option");
        option = new Option(detailedItem, menu[item].indexOf(detailedItem));
        categoryItems2.append(option);
      }
    }
  }
}
