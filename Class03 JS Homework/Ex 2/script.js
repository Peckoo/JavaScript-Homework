// -----------------HOMEWORK PART 2 --------------------
// --------------- HUMAN AND DOG YEARS -----------------
let userInput = prompt("Vnesi godini");
let parsedInput = parseInt(userInput);
let parsedInput2 = parseInt(userInput);
let age = (parsedInput);
let age2 = (parsedInput2)
function calculator(age, age2) {

if (!Number.isNaN(parsedInput, parsedInput2)) {
    if(age === 1) {
        console.log("7 human years");
    } else if(age2 === 7){
        console.log("1 dog year");
    } else if(age === 2){
        console.log("14 human years");
    } else if(age2 === 14){
        console.log("2 dog years");
    } else if(age === 3){
        console.log("21 human years");
    } else if(age2 === 21){
        console.log("3 dog years");
    } else if(age === 4){
        console.log("28 human years")
    } else if(age2 === 28){
        console.log("4 dog years");
    } else if(age === 5){
        console.log("35 human years");
    } else if(age2 === 35){
        console.log("5 dog years");
    }
} else {
    console.log("Not a valid input")
}
}
calculator(parsedInput, parsedInput);

