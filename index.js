
const getCartPrices = () => {
    const prices = []
    //const total = prices
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

