

function calculateChaiIngredients() {
    // so this programs prompts the user for the number of chai cups and convert the input to a number.
    const numberOfCups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make?"));
  // I am using const since it cant be reassigned later.  
    const waterPerCupMl = 200;
    const milkPerCupMl = 50;
    const teaLeavesPerCupTbsp = 1;
    const sugarPerCupTsp = 2;
  
   // for calculation nw!
    const totalWater = numberOfCups * waterPerCupMl;
    const totalMilk = numberOfCups * milkPerCupMl;
    const totalTeaLeaves = numberOfCups * teaLeavesPerCupTbsp;
    const totalSugar = numberOfCups * sugarPerCupTsp;
  
    // Print niw
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
    console.log("Enjoy your Chai Bora!");
  }
  
  // let now call the function to initiate this whple process
  calculateChaiIngredients();

