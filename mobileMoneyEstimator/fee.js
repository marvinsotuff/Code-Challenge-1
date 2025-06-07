function estimateTransactionFee(amountToSend) {
    const minFee = 10;
    const maxFee = 70;
    const feeRate = 0.015;

    let calculatedFee = amountToSend * feeRate;

    if (calculatedFee < minFee) {
        calculatedFee = minFee;
    } else if (calculatedFee > maxFee) {
        calculatedFee = minFee;
    }

    const totalAmount = amountToSend + calculatedFee;

    console.log(`Amount to Send: KES ${amountToSend}`);
    console.log(`Transaction Fee: KES ${calculatedFee}`);
    console.log(`Total Amount to Pay: KES ${totalAmount}`);

    return totalAmount;
}


const input = prompt("Enter the amount you wish to send")
const amountToSend = Number(input)

if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Please enter a valid amount.");
} else {
    estimateTransactionFee(amountToSend);
}