const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
//1. Знайти суму та кількість позитивних елементів.
let sumPositive = 0;
let countPositive = 0;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > 0) {
        sumPositive += element;
        countPositive++;
    }
}
console.log("Сумма:" +sumPositive+ " та кількість: " +countPositive+ " позитивних елементів");


//2. Знайти мінімальний елемент масиву та його порядковий номер.
/*let minElement = arr[0];
let minIndex = 0;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < minElement) {
        minElement = element;
        minIndex = i;
    }
}
    console.log("Мінімальний елемент:" +minElement+", його порядковий номер:"+minIndex+".");*/


//3. Знайти максимальний елемент масиву та його порядковий номер.
/*let maxElement = arr[0];
let maxIndex = 0;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > maxElement) {
        maxElement = element;
        maxIndex = i;
    }
}
console.log("Максимальний елемент:" +maxElement+", його порядковий номер:"+maxIndex+".");*/


//4. Визначити кількість негативних елементів.
/*let countNegative = 0;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < 0) {
        countNegative++;
    }
}
console.log("Кількість негативних елементів:"+countNegative+".");*/


//5. Знайти кількість непарних позитивних елементів.
/*let countOddPositive = 0;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > 0 && element % 2 !== 0) {
        countOddPositive++;
    }
}
console.log("Кількість непарних позитивних елементів:"+countOddPositive+".");*/


//6. Знайти кількість парних позитивних елементів.
/*
let countEvenPositive = 0;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > 0 && element % 2 === 0) {
        countEvenPositive++;
    }
}
console.log("Кількість парних позитивних елементів:"+countEvenPositive+".");
*/


//7. Знайти суму парних позитивних елементів.
/*  let sumEvenPositive = 0;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > 0 && element % 2 === 0) {
        sumEvenPositive += element;
    }
}
console.log("Сума парних позитивних елементів:"+sumEvenPositive+".");*/


//8. Знайти суму непарних позитивних елементів.
/*let sumOddPositive = 0;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > 0 && element % 2 !== 0) {
        sumOddPositive += element;
    }
}
console.log("Сума непарних позитивних елементів:" + sumOddPositive + ".");*/

//9. Знайти добуток позитивних елементів.
/*let multPositive = 1;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > 0) {
        multPositive *= element;
    }
}
console.log("Добуток позитивних елементів:" + multPositive + ".");*/


//10. Знайти найбільший серед елементів масиву, остальні обнулити.
/*
let maxElement = arr[0];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (arr[i] > maxElement) {
        maxElement = arr[i];
    }
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== maxElement) {
        arr[i] = 0;
    }
}
console.log("Hайбільший серед елементів масиву:" + maxElement + ".");
*/
