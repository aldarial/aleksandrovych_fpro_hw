//let numOrStr = prompt('input number or string');
// console.log(numOrStr)
//
// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }

let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (true){
    case(!numOrStr):
        console.log('You cancelled');
        break;
    case(!numOrStr.trim()):
        console.log('Empty string');
        break;
    case(isNaN(+numOrStr)):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log("OK!");
        break;
}