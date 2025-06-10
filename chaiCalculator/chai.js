// Load the prompt-sync package to enable input in Node.js
const prompt = require('prompt-sync')();

// So this program prompts the user for the number of chai cups and converts the input to a number.
function calculateChaiIngredients() {
    const numberOfCups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make? "));

    // I am using const since it can't be reassigned later.
    const waterPerCupMl = 200;
    const milkPerCupMl = 50;
    const teaLeavesPerCupTbsp = 1;
    const sugarPerCupTsp = 2;

    // For calculation nw!
    const totalWater = numberOfCups * waterPerCupMl;
    const totalMilk = numberOfCups * milkPerCupMl;
    const totalTeaLeaves = numberOfCups * teaLeavesPerCupTbsp;
    const totalSugar = numberOfCups * sugarPerCupTsp;

    // Print now
    console.log(`\nTo make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
    console.log("Enjoy your Chai Bora!");
}

// Let now call the function to initiate this whole process
calculateChaiIngredients();
