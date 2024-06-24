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

let items = [
    {
    name: "Magic the Gathering",
    price: 29.99,
    quantity: 1,
    img: 'pics/mtg.jpeg'
    }, 
    {
    name: "Star Wars",
    price: 99.99,
    quantity: 1,
    img: 'pics/swl.jpg'
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
    {
    name: "Magic the Gathering",
    price: 29.99,
    quantity: 1
    }, 

]

/*
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
*/

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
    

document.getElementById('checkout').addEventListener('click', event => {
    event.preventDefault();
    const receipt = document.getElementById('receipt');
    const mainPage = document.getElementById('content');
    mainPage.style.display = 'none';
    receipt.classList.remove('receipt');
    receipt.innerHTML = '';
    for(let obj of products) {
        if(obj.count > 0) {
            receipt.innerHTML += `<div class="checkout">${obj.name}  QTY:  ${obj.quantity} PRICE: $${(obj.price).toFixed(2)}</div>`;
        }
    }
    receipt.innerHTML += `<div class="totalAmount"<h1>Total: $${(subtotalPlusTax(products)).toFixed(2)}</h1></div>`;
})
