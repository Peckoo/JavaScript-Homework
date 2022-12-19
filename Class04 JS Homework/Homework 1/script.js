// let name = prompt("Vnesi ime");
// let mood = prompt("Vnesi kako si raspolozen");
// let activity = prompt("Vnesi koja aktivnost ja izvrsuvas");

function tellStory(name, mood, activity) {
    let result = ("This is " + name + ". " + name + " is a nice person. Today they are " + mood + ". They are " + activity + " all day. The end.")
    return result
}

let fullStory = tellStory("Pece", "good", "working");
console.log(fullStory);