let money = prompt("Vnesi pari...")
console.log(money)
let moneyInTheBank = prompt("Pari na banka")
console.log(moneyInTheBank)
let returnMoney = (moneyInTheBank - money)
console.log(returnMoney);


function atmCalculator(){
    if(!Number.isNaN(prompt)) {
        if(money <= moneyInTheBank) {
            console.log("Ti ostanuvaat uste " + returnMoney)
        } else if (money > moneyInTheBank) {
            console.log("Not enough money in your card")
        } else {
            console.log("Not a valid input")
        }
    }
}

atmCalculator();