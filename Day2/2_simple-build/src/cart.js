function removeFromCart(index) {
    cart.splice(index, 1);
    log("removed item from index: " + index);
}

export default removeFromCart;