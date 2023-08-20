let age = prompt('What is your year of birth?', 'Year');
console.log(age);
var city = prompt('What city do you live in?');
console.log(city);
let sport = prompt('What is your favorite sport?');
console.log(city);
var sub_result = 2023 - age;
console.log(sub_result);

let answer = '';

if (age === answer) {
    alert("It's a pity that you didn't want to enter your date of birth")
}
if (city === "Kiev") {
    alert("You are " + sub_result + ". You are live in the capital of Ukraine!");
} else if (city === "London") {
    alert("You are " + sub_result + ". You are live in the capital of UK!");
} else if (city === "Washington") {
    alert("You are " + sub_result + ". You are live in the capital of USA!");
} else if (city !== answer) {
    alert("You are " + sub_result + ". You live in " + city + "!");
} else {
    alert("It's a pity that you didn't want to enter your city")
}

if (sport === "Football") {
    alert("Cool! Do you want to be like Lionel Messi?");
} else if (sport === "Swimming") {
    alert("Cool! Do you want to be like Michael Phelps?");
} else if (sport === "Boxing") {
    alert("Cool! Do you want to be like Mike Tyson?");
} else if (sport !== answer) {
    alert("Nice!");
} else {
    alert("It's a pity that you didn't want to enter your favorite sport")
}


