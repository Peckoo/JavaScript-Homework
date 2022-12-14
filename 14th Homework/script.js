// -----------------HOMEWORK PART 2 --------------------
// --------------- HUMAN AND DOG YEARS -----------------
let dogYears = prompt("Vnesi kuceski godini");
console.log("KUCESKI GODINI", dogYears);
let humanYears = prompt("Vnesi covecki godini");
console.log("COVECKI GODINI:" ,humanYears);
let parsedInput = parseInt(dogYears);
let parsedInput2 = parseInt(humanYears);
function calculator(dogAge, humanAge) {

if (!Number.isNaN(dogAge, humanAge)) {

    let dogAgeResult =  humanAge * 7;
    let humanAgeResult = dogAge / 7;
    console.log("hUMAN TO DOG YEARS: ", dogAgeResult);
    console.log("DOG TO HUMAN YEARS:", humanAgeResult);
} else {
    console.log("Not a valid input")
}
}
calculator(dogYears, humanYears);





