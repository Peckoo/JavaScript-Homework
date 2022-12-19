function sumArray(arr){
    let total = 0;
    for(let num of arr){
        total += num;
        console.log(total)
    }
    return total;
}

let result = sumArray([1,2,3,4,5]);
console.log(result)

function validateNumber(num){
    if(isFinite(num)){
        return true;
    } else{
        return false;
    }
}

function validateArray(arr){
    for(let num of arr){
        if(validateNumber(num)){
            console.log(`${num} is a valis number`)
        } else {
            console.log(`${num} is not a valid number`)
        }
    }
}

validateArray([1,2,3,4,"five",8, 09]);