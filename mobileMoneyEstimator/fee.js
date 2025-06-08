
function estimateTransactionFee() {
    const input = prompt("Unatuma Ngapi? (KES):");
    const amountToSend = Number(input);
  

    if (isNaN(amountToSend) || amountToSend <= 0) {
      console.log("Please enter a valid positive amount.");
      return; 
    }

    const FEE_PERCENTAGE = 0.015; // 1.5%
    const MIN_FEE = 10;           // kes 15
    const MAX_FEE = 70;           // Kes 70
  
    

    let fee = amountToSend * FEE_PERCENTAGE;
  
    
    if (fee < MIN_FEE) {
      fee = MIN_FEE;
    } else if (fee > MAX_FEE) {
      fee = MAX_FEE;
    }
  
    const totalDebited = amountToSend + fee;
  
    
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log(`\nSend Money Securely!`); // termplate literal. an espace sequence
  }
  
  