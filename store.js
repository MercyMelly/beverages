
let cart = []; 

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = "";

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart_item");
        
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>KSH ${item.price}</span>
            <span>Quantity: ${item.quantity}</span>
            <button onclick="increaseQuantity(${index})">+</button>
        `; 
        cartContainer.appendChild(cartItem);
    });

    updateCartTotal();
}

function increaseQuantity(index) {
    cart[index].quantity++;
    updateCartDisplay();
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById("cart_total_price").innerText = `KSH ${total}`;
}

function checkout() {
    alert("Thank you for your purchase! Total: " + document.getElementById("cart_total_price").innerText);
    cart = [];
    updateCartDisplay();
}