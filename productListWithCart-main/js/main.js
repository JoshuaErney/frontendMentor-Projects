const confirmOrderBtn = document.querySelector('#confirm-order');
const confirmOrderDialog = document.querySelector('#shoppingCart-Dialog');

const startNewOrder = document.querySelector('button#new-order');

const cardTemplate = document.querySelector('#card-template');
const menuContainer = document.querySelector('#menuItem-container');

confirmOrderBtn.addEventListener('click', (e) => {
    confirmOrderDialog.showModal();
});

startNewOrder.addEventListener('click', () => {
    confirmOrderDialog.close();
});

async function getJSONData() {
    const url = "./data/desserts.json";
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        displayDesserts(result);

    } catch (error) {
        console.error(error.message);
    }
}

function displayDesserts(data) {
    data.forEach(item => {
        let card = cardTemplate.content.cloneNode(true);
        const cardTitle = card.querySelector('h3.food-name');
        const cardCategory = card.querySelector('data.food-category');
        const cardType = card.querySelector('data.food-type');
        const cardPrice = card.querySelector('data.food-price');
        const cardqty = card.querySelector('data.food-quantity');

        cardTitle.textContent = item.name

        cardCategory.textContent = item.category
        cardCategory.value = item.category

        cardType.textContent = item.type
        cardType.value = item.type

        cardPrice.textContent = `$${item.price}`
        cardPrice.value = Number(item.price);

        cardqty.textContent = item.quantity
        cardqty.value = Number(item.quantity)

        menuContainer.appendChild(card);
    });
}

getJSONData();

// const add2CartBtns = card.querySelectorAll('button.order-controls');