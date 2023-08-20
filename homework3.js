let age = prompt('What is your year of birth?','Year');
console.log(age);
var city = prompt('What city do you live in?','City');
console.log(city);
let sport = prompt('What is your favorite sport?','Sport');
console.log(city);
var sub_result = 2023 - age;
console.log(sub_result);

if(city==="Kiev"){
    alert(sub_result + ". You are live in the capital of Ukraine!");
} else if(city==="London") {
    alert(sub_result +". You are live in the capital of UK!");
} else if(city==="Washington") {
    alert(sub_result +". You are live in the capital of USA!");
} else {
    alert(sub_result + ". You live in" + city + "!");
}

if(sport==="Football"){
    alert("Cool! Do you want to be like Lionel Messi?");
} else if(sport==="Swimming") {
    alert("Cool! Do you want to be like Michael Phelps?");
} else if(sport==="Boxing") {
    alert("Cool! Do you want to be like Mike Tyson?");
} else {
    alert("Nice!");
}


