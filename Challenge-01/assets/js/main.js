// Invoking functions from a file "./funOperations.js"
import * as funOperations from "./funOperations.js"
// Get the three principal values (operator, prime number, second number)
let operationInput, number1, number2

/**
 * Receiving and checking the value of the operator through the function of getting the value of the operator
 * Check if the user input is empty and enters the correct value
 */
while (true) {
    operationInput = funOperations.getOperationInput()

    if (operationInput === null || !funOperations.allOperations.includes(operationInput)) {
        continue
    }
    else break
}

/**
 * Receiving and checking the value of the prime number through the function of receiving the first number
 * Check if the user input is blank and enter a numeric value
 */
while (true) {
    number1 = funOperations.getNumber1()

    if (number1 === null || !Number.isInteger(Number(number1))) {
        continue
    }
    else {
        number1 = Number(number1)
        break
    }
}

/**
 * Receiving and checking the value of the second number through the function of receiving the second number
 * Check if the user is blank and enter a numeric value
 * If the operator is the first number and the factorial, the second number should not be taken
 * If the operator was split and the second value was 0, then again the second value should be taken from the user
 */
if ((operationInput !== "Factorial" && operationInput !== "factorial" && operationInput !== "!") && (operationInput !== "IsPrime" && operationInput !== "isprime" && operationInput !== "`")) {
    while (true) {
        number2 = funOperations.getNumber2()

        if (number2 === null || !Number.isInteger(Number(number2))) {
            continue
        }
        else {
            number2 = Number(number2)
            if ((operationInput === "/" || operationInput === "Divide" || operationInput === "divide") && number2 === 0) {
                console.log("sssssssssssssssssssss");
                continue
            }
            break
        }
    }
}
