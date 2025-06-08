
function calculateBodaFare () {
    const distanceInKm = Number (Prompt ("Unafika Wapi Mkumbwa? "));

    const baseFare = 50;
    const chargePerkm = 15 ;

    const totalFare = baseFare + (distanceInKm * chargePerkm);


    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}`);
    console.log(); // this i left is like that since it Adds a blank line for readability
    console.log("Panda Pikipiki!");

}
 calculateBodaFare ();