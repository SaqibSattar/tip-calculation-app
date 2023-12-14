// script.js
document.getElementById("calculateBtn").addEventListener("click", calculateTip);
document.getElementById("resetBtn").addEventListener("click", resetCalculator);

function calculateTipAmount(billAmount, serviceRating) {
    switch (serviceRating) {
        case 1:
            return billAmount * 0.05;
        case 2:
            return billAmount * 0.10;
        case 3:
            return billAmount * 0.15;
        case 4:
            return billAmount * 0.20;
        default:
            return 0;
    }
}

function calculateTip() {
    const billAmountInput = document.getElementById("billAmount");
    const serviceRatingSelect = document.getElementById("serviceRating");
    const personCountInput = document.getElementById("personCount");
    const mealTypeSelect = document.getElementById("mealType");

    const tipAmountOutput = document.getElementById("tipAmount");
    const totalAmountOutput = document.getElementById("totalAmount");
    const amountPerPersonOutput = document.getElementById("amountPerPerson");

    const billAmount = parseFloat(billAmountInput.value);
    const serviceRating = parseFloat(serviceRatingSelect.value);
    const personCount = parseInt(personCountInput.value);
    const mealType = mealTypeSelect.value;

    if (isNaN(billAmount) || isNaN(serviceRating) || isNaN(personCount)) {
        tipAmountOutput.textContent = "Please Enter Valid Numbers";
        totalAmountOutput.textContent = "";
        amountPerPersonOutput.textContent = "";
        return;
    }

    let tip = calculateTipAmount(billAmount, serviceRating);

    if (mealType === "dinner") {
        tip += 5;
    }

    let totalAmount = billAmount + tip;
    let amountPerPerson = totalAmount / personCount;

    tipAmountOutput.textContent = `Tip: $${tip.toFixed(2)}`;
    totalAmountOutput.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    amountPerPersonOutput.textContent = `Amount Per Person: $${amountPerPerson.toFixed(2)}`;
}

function resetCalculator() {
    document.getElementById('billAmount').value = '';
    document.getElementById('serviceRating').value = '1';
    document.getElementById('personCount').value = '';
    document.getElementById('mealType').value = 'breakfast';
    document.getElementById('tipAmount').textContent = '';
    document.getElementById('totalAmount').textContent = '';
    document.getElementById('amountPerPerson').textContent = '';
}
