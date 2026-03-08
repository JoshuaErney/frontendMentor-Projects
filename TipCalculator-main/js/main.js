function calculateTotals() {

    const billTotal = document.querySelector('input#billTotal');
    // console.log(billTotal);

    const numOfPeople = document.querySelector('input#numOfPeople');
    // console.log(numOfPeople.value);

    const tipPercentages = document.querySelectorAll('input[type="radio"]');
    // console.log(tipPercentages);

    function getNumberValue(string) {
        const number = Number(string);
        return number;
    };

    function getSelectedPercentage() {
        tipPercentages.forEach(percentage => {
            if (percentage.checked === true) {
                const tipPercentage = getNumberValue(percentage.value);
                return tipPercentage;
            };
        });
    };

    console.log(getSelectedPercentage());

    function getTipAmount() {
        const tipAmount = getNumberValue(billTotal.value) * getSelectedPercentage
        return tipAmount;
    };

    function getFinalTotal() {
        const finalTotal = getTipAmount + totalAmount;
        return finalTotal;
    };

    function getAmountPerPerson() {
        const amountPerPerson = getFinalTotal / numOfPeople;
        return amountPerPerson;
    };

    getAmountPerPerson();
};

calculateTotals();

// totalAmount * tipPercentage = tipAmount
// tipAmount + totalAmount = finalTotal
// finalTotal / numOfPeople = amountPerPerson