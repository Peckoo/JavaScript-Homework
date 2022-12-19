function sumStrings(array){
    let oneBigString = "";
    for (let i = 0; i < array.length; i++){
        oneBigString += array[i];
    }
    return oneBigString;
}

let result = sumStrings(["Hello ", "there ", "students ", "from ", "SEDC"])
console.log(result)
