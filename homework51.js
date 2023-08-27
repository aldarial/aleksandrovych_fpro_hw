let length = +prompt("Введіть довжину масиву:", 0)
//1
if (!isNaN(length) && length >= 0) {
    let userArray = [];
    for (let i = 0; i < length; i++) {
        let element = +prompt(`Введіть елемент для індексу ${i}:`);
        userArray.push(element)
    }
    console.log(userArray);
} else {
    console.log("Error");
}

//2
/*if (!isNaN(length) && length >= 0) {
    let userArray = [];
    for (let i = 0; i < length; i++) {
        let element = +prompt(`Введіть елемент для індексу ${i}:`);
        userArray.push(element)
    }
    console.log(userArray);
    userArray.sort(function(a, b) {
        return a - b;
    });

    console.log(userArray);
} else {
    console.log("Error");
}*/

//3
/*if (!isNaN(length) && length >= 0) {
    let userArray = [];
    for (let i = 0; i < length; i++) {
        let element = +prompt(`Введіть елемент для індексу ${i}:`);
        userArray.push(element)
    }

    userArray.splice(2, 2)
    console.log(userArray);
} else {
    console.log("Error");
}*/

