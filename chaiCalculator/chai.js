function calculateChaiIngredients(quantity) {
    const teaLeaves = quantity * 1; // 1 tablespoon of tea leaves per cup
    const water = quantity * 200; // 200 ml of water per cup
    const milk = quantity * 50; // 50 ml of milk per cup
    const sugar = quantity * 2; // 2 teaspoons of sugar per cup

    return {
        teaLeaves,
        water,
        milk,
        sugar
    };
}
const cups = prompt("Enter the number of cups of chai you want to make:");
const ingredients = calculateChaiIngredients(cups);
console.log(ingredients);


if (cups === 2) {
    console.log(`To make 2 cups of chai, you need: 2 tablespoons of tea leaves, 400 ml of water, 100 ml of milk, and 4 teaspoons of sugar.`);
} else {
    console.log(`To make ${cups} cups of chai, you need: ${ingredients.teaLeaves} tablespoons of tea leaves, ${ingredients.water} ml of water, ${ingredients.milk} ml of milk, and ${ingredients.sugar} teaspoons of sugar.`);
}