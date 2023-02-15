function getTextElementValueByID(elementID) {
    const phoneTotalElement = document.getElementById(elementID);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueByID(elementID, value) {
    const subTotalElement = document.getElementById(elementID);
    subTotalElement.innerText = value;
}
function calculateSubTotal() {
    // Calculate total
    const currentPhoneTotal = getTextElementValueByID('phone-total');
    const currentCaseTotal = getTextElementValueByID('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueByID('sub-total', currentSubTotal);

    // Calculate tax

    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueByID('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueByID('final-total', finalAmount);
}

