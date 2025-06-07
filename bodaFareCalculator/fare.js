function calculateBodaFare(distanceInKm) {
    const baseFare = 50; //fare in Kenyan Shillings
    const chargePerKm = 15; //fare per kilometer in Kenyan Shillings
    const distanceFare = distanceInKm * chargePerKm
    const totalFare = baseFare + distanceFare

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("Panda Pikipiki!");



    return totalFare;
};


const input = prompt("How many kilometres")
const distanceInKm = Number(input) 


if (isNaN(distanceInKm) || distanceInKm <= 0) {
    console.log("Please enter a valid distance.");
} else {
    const totalFare = calculateBodaFare(distanceInKm);
    console.log(`Your fare for the trip is KES ${totalFare}`);
}