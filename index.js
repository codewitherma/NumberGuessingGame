#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\nWelcome to CodeWuthErma CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 7 + 1);
let answer = await inquirer.prompt([
    { message: "Guess a number between 1 to 7:",
        type: "number",
        name: "userGuessedNumber"
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed a correct number");
}
else {
    console.log("You Guessed a wrong number");
}
