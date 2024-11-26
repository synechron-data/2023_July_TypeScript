import removeFromCart from "./cart";

const cart = [];

function log(message) {
    console.log(message);
}

function addToCart(item) {
    cart.push(item);
    log("added: " + item);
}

addToCart("Air Filter");
removeFromCart(1);