#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let balanceAmount;
console.log(chalk.green(`All Eisting Users use this pin "1234" and New User First Set his pin and and Use this application`));
let usertype;
let condition = true;
let hamzaspin;
let users_input = await inquirer.prompt([
    {
        name: "user",
        message: "Please Select any one",
        type: "list",
        choices: ["Existing User", "New User"]
    }
]);
usertype = users_input.user;
while (condition) {
    if (usertype === "New User") {
        balanceAmount = 10000;
        console.log(`Your Account balance is ${balanceAmount}`);
        let defaultpin = await inquirer.prompt([
            {
                name: "yourpin",
                message: "Set Your Pin",
                type: "number"
            }
        ]);
        let pinAnswer = await inquirer.prompt([
            {
                name: "pin",
                message: "Enter Your Pin",
                type: "number"
            }
        ]);
        if (defaultpin.yourpin === pinAnswer.pin) {
            let operationChoice = await inquirer.prompt([
                {
                    name: "operation",
                    message: "What do you want",
                    type: "list",
                    choices: ["withdraw", "Check Your Balance"]
                }
            ]);
            if (operationChoice.operation === "withdraw") {
                let withdrawAmount = await inquirer.prompt([
                    {
                        name: "amount",
                        message: "Select Your withdraw amount: ",
                        type: "list",
                        choices: ["500", "1000", "2000", "5000", "other"]
                    }
                ]);
                if (balanceAmount >= withdrawAmount.amount) {
                    balanceAmount -= withdrawAmount.amount;
                    console.log(`Your remaining balance is : ${balanceAmount}`);
                }
                else if (withdrawAmount.amount > balanceAmount) {
                    console.log("Insufient Balance!!!");
                }
                if (withdrawAmount.amount === "other") {
                    let otherAmount = await inquirer.prompt([
                        {
                            name: "otheramount",
                            message: "Enter Your withdraw amount: ",
                            type: "number"
                        }
                    ]);
                    if (balanceAmount >= otherAmount.otheramount) {
                        balanceAmount -= otherAmount.otheramount;
                        console.log(`Your remaining balance is : ${balanceAmount}`);
                    }
                    else {
                        console.log(chalk.red("Insuficient Balance !!"));
                    }
                }
            }
            else if (operationChoice.operation === "Check Your Balance") {
                console.log(`Your current account balance is: ${balanceAmount}`);
            }
        }
        else {
            console.log(chalk.red(`Incorrect pin!!!`));
        }
    }
    else if (usertype === "Existing User") {
        let user_info = await inquirer.prompt([
            {
                name: "username",
                message: "Enter Your Name",
                type: "input"
            }
        ]);
        let usersname = user_info.username;
        if (usersname === "Hamza" || usersname === "hamza" || usersname === "HAMZA" || usersname === "HAMZA BHATTI" || usersname === "hamza bhatti" || usersname === "hamzabhatti" || usersname === "Hamzabhatti" || usersname === "HamzaBhatti" || usersname === "HAMZABHATTI") {
            let cnic = await inquirer.prompt([
                {
                    name: "nicno",
                    message: "Enter Your NIC number without dashes",
                    type: "input"
                }
            ]);
            let nicnumber = cnic.nicno;
            if (nicnumber.length === 13) {
                balanceAmount = 50000;
                console.log(`Your Avaialable amount is is ${balanceAmount}`);
                let pinnumber = await inquirer.prompt([
                    {
                        name: "yourpin",
                        message: "Enter You Pin",
                        type: "number"
                    }
                ]);
                hamzaspin = pinnumber.yourpin;
                if (hamzaspin === 1234) {
                    let operationChoice = await inquirer.prompt([
                        {
                            name: "operation",
                            message: "What do you want",
                            type: "list",
                            choices: ["withdraw", "Check Your Balance"]
                        }
                    ]);
                    if (operationChoice.operation === "withdraw") {
                        let withdrawAmount = await inquirer.prompt([
                            {
                                name: "amount",
                                message: "Select Your withdraw amount: ",
                                type: "list",
                                choices: ["500", "1000", "2000", "5000", "other"]
                            }
                        ]);
                        if (balanceAmount >= withdrawAmount.amount) {
                            balanceAmount -= withdrawAmount.amount;
                            console.log(`Your remaining balance is : ${balanceAmount}`);
                        }
                        else if (withdrawAmount.amount > balanceAmount) {
                            console.log("Insufient Balance!!!");
                        }
                        if (withdrawAmount.amount === "other") {
                            let otherAmount = await inquirer.prompt([
                                {
                                    name: "otheramount",
                                    message: "Enter Your withdraw amount: ",
                                    type: "number"
                                }
                            ]);
                            if (balanceAmount >= otherAmount.otheramount) {
                                balanceAmount -= otherAmount.otheramount;
                                console.log(`Your remaining balance is : ${balanceAmount}`);
                            }
                            else {
                                console.log("Insuficient Balance !!");
                            }
                            balanceAmount = otherAmount.otheramount;
                        }
                    }
                    else if (operationChoice.operation === "Check Your Balance") {
                        console.log(`Your current account balance is: ${balanceAmount}`);
                    }
                }
                else {
                    console.log(`Incorrect pin!!!`);
                }
            }
            else {
                console.log(`Enter a Valid NIC number!`);
            }
        }
        else if (usersname === "Hadi" || usersname === "hadi" || usersname === "HADI" || usersname === "Abdul Hadi" || usersname === "abdul hadi" || usersname === "abdulhadi" || usersname === "Abdulhadi" || usersname === "AbdulHadi" || usersname === "ABDULHADI") {
            let cnic = await inquirer.prompt([
                {
                    name: "nicno",
                    message: "Enter Your NIC number without dashes",
                    type: "input"
                }
            ]);
            let nicnumber = cnic.nicno;
            if (nicnumber.length === 13) {
                balanceAmount = 40000;
                console.log(`Your Avaialable amount is is ${balanceAmount}`);
                let pinnumber = await inquirer.prompt([
                    {
                        name: "yourpin",
                        message: "Enter You Pin",
                        type: "number"
                    }
                ]);
                hamzaspin = pinnumber.yourpin;
                if (hamzaspin === 1234) {
                    let operationChoice = await inquirer.prompt([
                        {
                            name: "operation",
                            message: "What do you want",
                            type: "list",
                            choices: ["withdraw", "Check Your Balance"]
                        }
                    ]);
                    if (operationChoice.operation === "withdraw") {
                        let withdrawAmount = await inquirer.prompt([
                            {
                                name: "amount",
                                message: "Select Your withdraw amount: ",
                                type: "list",
                                choices: ["500", "1000", "2000", "5000", "other"]
                            }
                        ]);
                        if (balanceAmount >= withdrawAmount.amount) {
                            balanceAmount -= withdrawAmount.amount;
                            console.log(`Your remaining balance is : ${balanceAmount}`);
                        }
                        else if (withdrawAmount.amount > balanceAmount) {
                            console.log("Insufient Balance!!!");
                        }
                        if (withdrawAmount.amount === "other") {
                            let otherAmount = await inquirer.prompt([
                                {
                                    name: "otheramount",
                                    message: "Enter Your withdraw amount: ",
                                    type: "number"
                                }
                            ]);
                            if (balanceAmount >= otherAmount.otheramount) {
                                balanceAmount -= otherAmount.otheramount;
                                console.log(`Your remaining balance is : ${balanceAmount}`);
                            }
                            else {
                                console.log("Insuficient Balance !!");
                            }
                            balanceAmount = otherAmount.otheramount;
                        }
                    }
                    else if (operationChoice.operation === "Check Your Balance") {
                        console.log(`Your current account balance is: ${balanceAmount}`);
                    }
                }
                else {
                    console.log(`Incorrect pin!!!`);
                }
            }
            else {
                console.log(`Enter a Valid NIC number!`);
            }
        }
        else if (usersname === "Tufail" || usersname === "tufail" || usersname === "TUFAIL" || usersname === "TUFAIL PANJWANI" || usersname === "tufail panjwani" || usersname === "tufailpanjwani" || usersname === "TufailPanjwani" || usersname === "Tufailpanjwani" || usersname === "TUFAILPANJWANI") {
            let cnic = await inquirer.prompt([
                {
                    name: "nicno",
                    message: "Enter Your NIC number without dashes",
                    type: "input"
                }
            ]);
            let nicnumber = cnic.nicno;
            if (nicnumber.length === 13) {
                balanceAmount = 60000;
                console.log(`Your Avaialable amount is is ${balanceAmount}`);
                let pinnumber = await inquirer.prompt([
                    {
                        name: "yourpin",
                        message: "Enter You Pin",
                        type: "number"
                    }
                ]);
                hamzaspin = pinnumber.yourpin;
                if (hamzaspin === 1234) {
                    let operationChoice = await inquirer.prompt([
                        {
                            name: "operation",
                            message: "What do you want",
                            type: "list",
                            choices: ["withdraw", "Check Your Balance"]
                        }
                    ]);
                    if (operationChoice.operation === "withdraw") {
                        let withdrawAmount = await inquirer.prompt([
                            {
                                name: "amount",
                                message: "Select Your withdraw amount: ",
                                type: "list",
                                choices: ["500", "1000", "2000", "5000", "other"]
                            }
                        ]);
                        if (balanceAmount >= withdrawAmount.amount) {
                            balanceAmount -= withdrawAmount.amount;
                            console.log(`Your remaining balance is : ${balanceAmount}`);
                        }
                        else if (withdrawAmount.amount > balanceAmount) {
                            console.log("Insufient Balance!!!");
                        }
                        if (withdrawAmount.amount === "other") {
                            let otherAmount = await inquirer.prompt([
                                {
                                    name: "otheramount",
                                    message: "Enter Your withdraw amount: ",
                                    type: "number"
                                }
                            ]);
                            if (balanceAmount >= otherAmount.otheramount) {
                                balanceAmount -= otherAmount.otheramount;
                                console.log(`Your remaining balance is : ${balanceAmount}`);
                            }
                            else {
                                console.log("Insuficient Balance !!");
                            }
                            balanceAmount = otherAmount.otheramount;
                        }
                    }
                    else if (operationChoice.operation === "Check Your Balance") {
                        console.log(`Your current account balance is: ${balanceAmount}`);
                    }
                }
                else {
                    console.log(`Incorrect pin!!!`);
                }
            }
            else {
                console.log(`Enter a Valid NIC number!`);
            }
        }
        else {
            console.log(`Please check you name again!`);
        }
    }
    let process_again = await inquirer.prompt({
        name: "again",
        message: "Do you want another operation ?",
        type: "confirm",
        default: "true"
    });
    condition = process_again.again;
}
