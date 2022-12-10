console.log("Connected")


let userInput = prompt("Vnesi godina!");
let parsedInput = parseInt(userInput);
let year = (parsedInput)
let calculate = ((year-4)%12);

if (!Number.isNaN(parsedInput)) {
    if(calculate = 0) {
        console.log("Rat")
    } else if (calculate = 1) {
        console.log("Ox")
    } else if (calculate = 2) {
        console.log("Tiger") 
    } else if (calculate = 3) {
        console.log("Rabbit") 
    } else if (calculate = 4) {
        console.log("Dragon")
    } else if (calculate = 5) {
        console.log("Snake") 
    } else if (calculate = 6) {
        console.log("Horse") 
    } else if (calculate = 7) {
        console.log("Goat")
    } else if (calculate = 8) {
        console.log("Monkey")
    } else if (calculate = 9) {
        console.log("Rooster")
    } else if (calculate = 10) {
        console.log("Dog")
    } else if (calculate = 11) {
        console.log("Pig")
    }
}else {
    console.log("Not a valid input") }