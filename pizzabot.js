const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

function checkOrderName(orderName) {
    return (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni);
}

function totalCost(orderQuantity) {
    return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
    if (orderQuantity >= 1 && orderQuantity <= 2) {
        return 10;
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        return 15;
    } else {
        return 20;
    }
}

function finalizeOrder(orderName, orderQuantity) {
    const orderTotal = totalCost(orderQuantity);
    const time = cookingTime(orderQuantity);
    alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} SEK. The pizzas will take ${time} minutes.`);
}

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`);

const orderName = prompt("Enter the name of the pizza you want to order today.");
const orderQuantity = prompt(`How many of ${orderName} do you want?`);

if (!checkOrderName(orderName)) {
    alert("Sorry, we don't have that pizza. Please refresh and order again.");
} else {
    finalizeOrder(orderName, orderQuantity);
}
