const cart = []
const addItem = item => {
    cart.push(item)
    console.log(cart)
}

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
    
