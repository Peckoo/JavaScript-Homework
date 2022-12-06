let onePhone = 119.95;
let maxPhones = 30;
let tax = 5;

let sum = onePhone * maxPhones
console.log(sum); 

let  sumWithTax = onePhone * (1+(tax/100));
console.log(sumWithTax);

let totalprice = sumWithTax * maxPhones;
console.log(totalprice);