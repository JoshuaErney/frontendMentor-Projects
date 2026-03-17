const confirmOrderBtn = document.querySelector('#confirm-order');
const confirmOrderDialog = document.querySelector('#shoppingCart-Dialog');

const startNewOrder = document.querySelector('button#new-order');

confirmOrderBtn.addEventListener('click', (e) => {
    confirmOrderDialog.showModal();
})

startNewOrder.addEventListener('click', () => {
    confirmOrderDialog.close();
})