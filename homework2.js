let todo = prompt("What you want to do? add, sub, mult or div?")

var first_number = parseFloat(prompt("Enter the first number: "));
var second_number = parseFloat(prompt("Enter the second number: "));

var add_result = first_number + second_number;
var sub_result = first_number - second_number;
var multi_result = first_number * second_number;
var div_result = first_number / second_number;

switch (todo){
    case 'add':
        console.log(first_number + second_number)
        alert(first_number + " + " + second_number + " = " + add_result);
        break;
    case 'sub':
        console.log(first_number - second_number)
        alert(first_number + " - " + second_number + " = " + sub_result);
        break;
    case 'mult':
        console.log(first_number * second_number)
        alert(first_number + " * " + second_number  + " = " + multi_result);
        break;
    case 'div':
        console.log(first_number / second_number)
        alert(first_number + " / " + second_number  + " = " + div_result);
        break;
    default:
        console.log("Something went wrong")
}

