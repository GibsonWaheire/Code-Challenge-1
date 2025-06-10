
const prompt = require('prompt-sync')();

function estimateTransactionFee(amountToSend) {
    // Fee is 1.5% of the amount
    let fee = amountToSend * 0.015;

    // Apply fee rules (min 10, max 70)
    if (fee < 10) {
        fee = 10;
    } else if (fee > 70) {
        fee = 70;
    }

    // Total amount debited = original amount + fee
    const totalDebited = amountToSend + fee;

    // Output the results
    console.log(`\nSending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log("Send Money Securely!");
}

// Ask user for the amount to send
const input = prompt("Unatuma Ngapi? (KES): ");
const amount = Number(input);

// Validate input
if (!isNaN(amount) && amount > 0) {
    estimateTransactionFee(amount);
} else {
    console.log("Tafadhali ingiza kiasi sahihi cha kutuma.");
}

  