let names = ["Bob", "Jill"];
let surname = ["Gregory", "Wurtz"];

let fullNames = [];
for(let i = 0; i < names.length; i++){
    let result = (i + 1) + ". " + names[i] + " " + surname[i];
    let result2 = `${ i + 1} ${names[i]} ${surname[i]}`
    // fullNames.push(result2);
    fullNames[i] = result
    console.log(result2)
}