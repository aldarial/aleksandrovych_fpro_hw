//1.Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів
// даного масиву.
function calculateAverage(numbersArray) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        if (typeof numbersArray[i] === 'number') {
            sum += numbersArray[i];
            count++;
        }
    }
    if (count === 0) {
        return 0;
    }
    return sum / count;
}

const array = []
const average = calculateAverage(array);
console.log(average);

//2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak
// може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.
//Обидва числа і знак виходять від користувача.
/*
function doMath(x, znak, y) {
    let result;

    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            if (y !== 0) {
                result = x / y;
            } else {
                result = 'Ділення на нуль неможливе';
            }
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            result = 'Невірна операція';
            break;
    }

    return result;
}

const x = parseFloat(prompt('Введіть перше число:'));
const znak = prompt('Введіть математичну операцію (+, -, *, /, %, ^):');
const y = parseFloat(prompt('Введіть друге число:'));

const result = doMath(x, znak, y);
console.log(`Результат: ${result}`);
*/

//3.Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів
// задає користувач. Значення всіх елементів всіх масивів задає користувач.
/*
function createAndFill2DArray() {

    const numRows = parseInt(prompt('Введіть кількість рядків:'));
    const numCols = parseInt(prompt('Введіть кількість стовпців:'));

    const twoDArray = [];

    for (let i = 0; i < numRows; i++) {
        const innerArray = [];
        for (let j = 0; j < numCols; j++) {
            const value = prompt(`Введіть значення для елемента (${i}, ${j}):`);
            innerArray.push(value);
        }
        twoDArray.push(innerArray);
    }
    return twoDArray;
}

const my2DArray = createAndFill2DArray();
console.log(my2DArray);
*/

//4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

/*
function removeCharacters(inputString, charactersToRemove) {
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (!charactersToRemove.includes(char)) {
            result += char;
        }
    }
    return result;
}

const inputString = prompt('Введіть рядок:');
const charactersToRemove = prompt('Введіть символи для видалення (без пробілів):').split('');

const result = removeCharacters(inputString, charactersToRemove);
console.log(result);
*/
