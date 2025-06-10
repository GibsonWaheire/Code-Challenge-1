const prompt = require('prompt-sync')();

function calculateBodaFare() {
    // Prompt the user for distance and convert input to a number
    const distanceInKm = Number(prompt("Unafika Wapi Mkubwa? kilometer ngapi? "));

    // Fare breakdown
    const baseFare = 50;
    const chargePerKm = 15;

    // Total fare calculation
    const totalFare = baseFare + (distanceInKm * chargePerKm);

    // Print breakdown
    console.log(`\nso kwa hio distance? itakuwa ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki base rate ni: KES ${baseFare}`);
    console.log(`but for ur ${distanceInKm} itakua: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("Panda Pikipiki!");
}

// Call the function
calculateBodaFare();
