#! usr/bin/env node

import inquirer from "inquirer"

let balanceAmount = 10000;
console.log(`Your Avaialable amount is is ${balanceAmount}` )

let defaultpin = await inquirer.prompt(
    [
        {
            name: "yourpin" , 
            message: "Set Your Pin" , 
            type: "number"
        }
    ]
);      

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin" , 
            message: "Enter Your Pin" , 
            type: "number"
        }
    ]
)

if(defaultpin.yourpin === pinAnswer.pin){

    let operationChoice = await inquirer.prompt(
        [
            {
                name: "operation" , 
                message: "What do you want" , 
                type: "list" , 
                choices: ["withdraw" , "Check Your Balance"]
            }
        ]
    );

    if(operationChoice.operation === "withdraw"){
        let withdrawAmount = await inquirer.prompt(
            [
                {
                    name: "amount" , 
                    message: "Select Your withdraw amount: " , 
                    type: "list" , 
                    choices: ["500", "1000" , "2000" , "5000" , "other"]
                }
            ]
        )
        if(balanceAmount >= withdrawAmount.amount){

            balanceAmount -= withdrawAmount.amount;
            console.log(`Your remaining balance is : ${balanceAmount}`)
        }
        else if(withdrawAmount.amount > balanceAmount){
            console.log("Insufient Balance!!!")
        }

        if(withdrawAmount.amount === "other"){
            let otherAmount = await inquirer.prompt(
                [
                    {
                        name: "otheramount" , 
                        message: "Enter Your withdraw amount: " , 
                        type: "number"
                    }
                ]
            )
            if(balanceAmount >= otherAmount.otheramount){

                balanceAmount -= otherAmount.otheramount;
                console.log(`Your remaining balance is : ${balanceAmount}`)
            }
            else{
                console.log("Insuficient Balance !!")
            }
        }
        
    }

    else if(operationChoice.operation === "Check Your Balance"){
        console.log(`Your current account balance is: ${balanceAmount}`)
    }
}
else{
    console.log(`Incorrect pin!!!`)
}
