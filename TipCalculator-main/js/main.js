function calculateTotals() {
    const billTotal = document.querySelector('input#billTotal');
    const numOfPeople = document.querySelector('input#numOfPeople');
    const tipPercentages = document.querySelectorAll('input[type="radio"]');
    const totalOutput = document.querySelector('#total-per-person');
    const tipOutput = document.querySelector('#tip-per-person');
    const form = document.querySelector('#tip-form');

    function getNumberValue(string) {
        const number = Number(string);
        return number;
    };

    function getSelectedPercentage() {
        const checked = Array.from(tipPercentages).find(p => p.checked);
        return checked ? getNumberValue(checked.value) : 0;
    }

    function getTipAmount() {
        const tipAmount = getNumberValue(billTotal.value) * getSelectedPercentage();
        return tipAmount
    };

    function getFinalTotal() {
        const finalTotal = getTipAmount() + getNumberValue(billTotal.value);
        return finalTotal;
    }

    function getAmountPerPerson() {
        const amountPerPerson = getFinalTotal() / getNumberValue(numOfPeople.value);
        return amountPerPerson;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let amount = getTipAmount() / numOfPeople.value
        tipOutput.innerHTML = `$${amount.toFixed(2)}`;
        totalOutput.innerHTML = `$${getAmountPerPerson().toFixed(2)}`;
    })
};

calculateTotals();