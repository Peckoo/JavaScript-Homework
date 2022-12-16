// let balance = 100.0;

// function get_balance(){
//     alert("Your current balance is: " +balance);
//     atm();
// }


// function make_deposit(){
//     let deposit = parseFloat(prompt("How much would you like to deposit?"));
//     if(isNaN(deposit) || deposit === ''){
//         alert("Error!! Please enter a number!");
//         make_deposit();
//     } else {
//         balance += deposit;
//         get_balance();
//     }
// }


// function make_withdraw(){
//     let withdraw = parseFloat(prompt("How much would you like to withdrawal?"))
//     if(isNaN(withdraw) || withdraw === ''){
//         alert("Error!! Please enter a number!")
//         make_withdraw;
//     } else{
//         balance -= withdraw;
//         get_balance();
//     }
// }

// function error(){
//     alert("Error: accepted numbers are 1 through 3.")
//     atm();
// }

// function atm(){
//     let choice = parseInt(prompt("Select a choice 1.) Balance 2.) Deposit 3.) Withdraw"))

//     if(choice === 1){
//         get_balance();
//     } else if (choice === 2){
//         make_deposit();
//     } else if (choice === 3){
//         make_withdraw(); 
//     } else {
//         error();
//     }
// }

// atm();

function atm2(){
    let balance = 1000;
    let withdraw = parseFloat(prompt("How much would you like to withdraw?"))
    if(isNaN(withdraw) || withdraw === ''){
        alert("Error!! Please enter a number!")
    } else if(withdraw > balance)
    {
        console.log("You dont have enough money to withdraw ")
    }
    else {
        let result = balance - withdraw;
        console.log("You withdraw " + withdraw + " money. You have " + result + " money left!");
        return result;
    }
}

atm2()
