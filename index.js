

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


let items = [
    {
    name: "Magic the Gathering",
    price: 29.99,
    quantity: 1
    }, 
    {
    name: "Magic the Gathering",
    price: 29.99,
    quantity: 1
    }, 
    {
    name: "Magic the Gathering",
    price: 29.99,
    quantity: 1,
    img: 'pics/mtg.jpeg'
    }, 
    {
    name: "Magic the Gathering",
    price: 29.99,
    quantity: 1
    }, 
    {
    name: "Magic the Gathering",
    price: 29.99,
    quantity: 1
    }, 
    {
    name: "Magic the Gathering",
    price: 29.99,
    quantity: 1
    }, 
    {
    name: "Magic the Gathering",
    price: 29.99,
    quantity: 1
    }, 
    {
    name: "Magic the Gathering",
    price: 29.99,
    quantity: 1
    }, 
    {
    name: "Magic the Gathering",
    price: 29.99,
    quantity: 1
    }, 
    {
    name: "Magic the Gathering",
    price: 29.99,
    quantity: 1
    }, 

]


const cart = []
const addItem = item => {
    cart.push(item)
    console.log(cart)
}

addItem()

let subTotal = cart.reduce((total, item) => {
    return subTotal + (item.price * item.quantity);
}, 0)

document.getElementById("subTotal").innerHTML = (subTotal)

document.addEventListener('DOMContentLoaded', () => {
    
    const checkout = document.getElementById("checkout-page");
    const checkBtn = document.getElementById("checkout");
    const store = document.getElementById("store-page");
    const goBack = document.getElementById("go-back");
    const addItemButton = document.getElementById("add-item-button");
    const cardPaymentPage = document.getElementById('card-payment-page');
    const cashPaymentPage = document.getElementById('cash-payment-page');
    const paymentMethodForm = document.getElementById('payment-method-form');

    

    const proceedToPurchase = () => {
        checkBtn.addEventListener('click', () => {
            store.classList.add("hidden");
            checkout.classList.remove("hidden");
        });
    };

    proceedToPurchase();

    const goBackHome = () => {
        goBack.addEventListener('click', () => {
            store.classList.remove("hidden");
            checkout.classList.add("hidden");
        });
    };

    goBackHome();

    

    paymentMethodForm.addEventListener('submit', e => {
        e.preventDefault();

        const paymentMethod = document.querySelector('input[name="pay-info"]:checked').value;

        switch (paymentMethod) {
            case 'credit/debit':
                cardPaymentPage.classList.remove("hidden");
                checkout.classList.add("hidden");
                break;
            case 'change':
                cashPaymentPage.classList.remove("hidden");
                checkout.classList.add("hidden");
                break;
            default:
                console.error('Invalid payment method selection');
        }
    });
});
    

