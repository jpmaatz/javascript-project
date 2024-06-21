/*
const btn = document.getElementById("cart-modal");
const cart = {}
let isCartModalOpen = false
let isCheckoutPageOpen = false

const addToCart = (game) =>{
    if (cart[game] !== undefined) cart[game] += 1
    else cart[game] = 1
}
*/

/*
const cashPayment = (dollars, coins) => {
    
    let amountDue = parseFloat(prompt("Enter the total amount due:"));

    if (isNaN(amountDue) || amountDue <= 0) {
        alert("Please enter a valid positive number for the amount due.");
        return;
    }

    let amountTendered = parseFloat(prompt("Enter the amount tendered:"));

    if (isNaN(amountTendered) || amountTendered < amountDue) {
        alert("Please enter a valid amount equal to or greater than the amount due.");
        return;
    }

    let change = amountTendered - amountDue;

    alert("Change due: $" + change.toFixed(2));
}

*/

const getCartPrices = () => {
    const prices = []

    return prices
}

const loadSubtotal = () => {
    const prices = getCartPrices()
    let total = 0
    for (const item of prices) total += item.price
    document.getElementById('subTotal').innerText = total
}

const calculateTotal = () => {
    
    let cartTotal = +document.getElementById('subTotal').innerText;
    let amountDue = parseFloat(cartTotal);

    let salesTaxRate = 0.0675;
    let salesTax = amountDue * salesTaxRate;

    let finalTotal = amountDue + salesTax;

    document.getElementById('salesTax').innerText = "$" + salesTax.toFixed(2);
    document.getElementById('finalTotal').innerText = "$" + finalTotal.toFixed(2);
}

