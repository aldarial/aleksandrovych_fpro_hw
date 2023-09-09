function createSum() {
    let total = 0;
    function add(x) {
        if (!isNaN(x)) {
            total += x;
            console.log(total);
        } else {
            console.log("Error. Введіть число.");
        }
        return total;
    }
    return add;
}
const sum = createSum();
while (true) {
    const userInput = prompt("Введіть число для додавання або натисніть Скасувати:");
    if (userInput === null) {
        break;
    }
    sum(parseFloat(userInput));
}
console.log("Загальна сума:", sum());
