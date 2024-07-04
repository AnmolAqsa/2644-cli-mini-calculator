import inquirer from "inquirer";
const calculator = await inquirer.prompt([
{message: "Enter your first number",
type: "number",
name: "num1",
},
{message: "Enter your second number",
type: "number",
name: "num2",
},
{
    message: "Select your operator",
    type: "list",
    name: "operators",
    choices: ["Addition","Subtraction","Multiplication","Division"]
},
]);
console.log(calculator);

 if (calculator.operators == "Addition"){
    console.log(calculator.num1 + calculator.num2)
 }else if (calculator.operators == "Subtraction"){
    console.log(calculator.num1 - calculator.num2)
 }else if (calculator.operators == "Multiplication"){
    console.log(calculator.num1 * calculator.num2)
 }else if (calculator.operators == "Division"){
    console.log(calculator.num1 / calculator.num2)
 }else {
    console.log("Seclect valid oprator")
 };