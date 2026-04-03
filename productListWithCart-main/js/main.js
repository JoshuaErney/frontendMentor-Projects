const confirmOrderBtn = document.querySelector('#confirm-order');
const confirmOrderDialog = document.querySelector('#shoppingCart-Dialog');
const startNewOrder = document.querySelector('button#new-order');
const cart = [];

confirmOrderBtn.addEventListener('click', (e) => {
    confirmOrderDialog.showModal();
});

startNewOrder.addEventListener('click', () => {
    confirmOrderDialog.close();
});

async function getData() {
    const url = "./data/desserts.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const jsonData = await response.json();
        return jsonData

    } catch (error) {
        console.error("Fetch failed:", error.message);
        throw error;
    }
};

getData()
    .then(data => {
        function foodItem(data) {
            const { name, type, price, category, quantity } = data;
            return {
                id: self.crypto.randomUUID().slice(0, 5),
                name: name || "Unknown Item",
                type: type || "General",
                price: price || 0,
                category: category || "Uncategorized",
                quantity: quantity || 1,
            }
        };

        function addToCart() {
            data.forEach(object => {
                cart.push(object);
            });
        }

        addToCart()
    });

// .then(data => {
//     function populateDessserts(data) {
//         const cardTemplate = document.querySelector('#card-template');
//         const menuContainer = document.querySelector('#menuItem-container');

//         data.forEach(item => {
//             // 2. Clone the template content
//             const cardClone = cardTemplate.content.cloneNode(true);

//             // 3. Select elements SPECIFICALLY from this clone
//             const cardTitle = cardClone.querySelector('h3.food-name');
//             const cardCategory = cardClone.querySelector('data.food-category');
//             const cardType = cardClone.querySelector('data.food-type');
//             const cardPrice = cardClone.querySelector('data.food-price');
//             const cardQty = cardClone.querySelector('data.food-quantity');

//             // 4. Fill the data
//             cardTitle.textContent = item.name;

//             cardCategory.textContent = item.category;
//             cardCategory.value = item.category;

//             cardType.textContent = item.type;
//             cardType.value = item.type;

//             cardPrice.textContent = `$${item.price}`;
//             cardPrice.value = Number(item.price);

//             cardQty.textContent = item.quantity;
//             cardQty.value = Number(item.quantity);

//             // 5. Append to the page
//             menuContainer.appendChild(cardClone);
//         });
//     };
//     populateDessserts(data);
// })
// .then(data => {
//     function addItemToCheckout() {
//         const buttons = document.querySelectorAll('.order-controls');
//         const cartContainer = document.querySelector('#cart-container');
//         const cartTemplate = document.querySelector('#cartItem-template');
//         const checkoutCart = document.querySelector('dialog ul#checkOutContainer');

//         buttons.forEach(button => {
//             button.addEventListener('click', (e) => {
//                 const selectedItem = button.closest('article.card');

//                 const name = selectedItem.querySelector('.food-name').textContent;
//                 const price = selectedItem.querySelector('.food-price').value;
//                 const qty = 1;

//                 const createItemNode = () => {
//                     const clone = cartTemplate.content.cloneNode(true);
//                     clone.querySelector('.item-name').textContent = name;
//                     clone.querySelector('.item-qty').textContent = qty;
//                     clone.querySelector('.unit-price').textContent = `($${price} each)`;
//                     const total = price * qty;
//                     clone.querySelector('.item-total').textContent = `$${total.toFixed(2)}`;
//                     return clone;
//                 };

//                 cartContainer.appendChild(createItemNode());
//                 checkoutCart.appendChild(createItemNode());
//             });
//         });
//     }

//     addItemToCheckout();
// });