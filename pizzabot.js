const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`);

const orderName = prompt("Enter the name of the pizza you want to order today.");
const orderQuantity = prompt(`How many of ${orderName} do you want?`);

const totalPrice = orderQuantity * pizzaPrice;
alert(`Great, I'll get started on your ${orderName} right away, it will cost ${totalPrice} SEK.`);

