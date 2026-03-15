const confirmOrderBtn = document.querySelector('#confirm-order');
const confirmOrderDialog = document.querySelector('#shoppingCart-Dialog');

confirmOrderBtn.addEventListener('click', (e) => {
    confirmOrderDialog.show();
})

