function tellStory(array){
let result = `This is ${array[0]}. ${array[0]} is a nice person. Today they are ${array[1]}. They are ${array[2]} all day. The end.`

return result
}

let a = tellStory(["Pece", "Good", "Working"]);
console.log(a);