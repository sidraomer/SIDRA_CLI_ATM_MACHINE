#! /usr/bin/env node
import inquirer from "inquirer";
// Creation of ClI ATM machine 
let originalPin = 5161;
let balance = 25000;
let pin = await inquirer.prompt([
    {
        name: "atmPin",
        message: "Enter your pin:",
        type: "number"
    }
]);
switch (pin.atmPin) {
    case originalPin:
        let select = await inquirer.prompt([
            {
                name: "option",
                message: "Choose the desired option",
                type: "list",
                choices: ["Check Balance", "Withdrawl"]
            }
        ]);
        switch (select.option) {
            case "Withdrawl":
                let amount = await inquirer.prompt([
                    {
                        name: "withdrawl_Amount",
                        message: "Enter the amount to withdraw:",
                        type: "number"
                    }
                ]);
                if (amount.withdrawl_Amount <= balance) {
                    balance = balance - amount.withdrawl_Amount;
                    console.log("Withdrawl Amount:", amount.withdrawl_Amount);
                    console.log("Your current balance is Rs.", balance);
                }
                else
                    console.log("Please enter the amount under", balance);
                break;
            default:
                console.log("Your current balance is Rs.", balance);
                break;
        }
        break;
    default:
        console.log("Your Pin is incorrect");
        break;
}
