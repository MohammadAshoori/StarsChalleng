/**
 * Save the possible values of the operators for review and display to the user
 */
const typeOperations = ["Sum", "Subtrack", "Multiply", "Divide", "Power", "Factorial", "IsPrime"]
const allOperations = ["Sum", "Subtrack", "Multiply", "Divide", "Power", "Factorial", "IsPrime", "sum", "subtrack", "multiply", "divide", "power", "factorial", "isprime", "+", "-", "*", "/", "**", "!", "`"]

/**
 * @returns Get the operator type from the user by calling this function
 */
function getOperationInput() {
    return prompt(`Enter your desired operation : \n Select as (${typeOperations})`, "Enter operation...")
}

/**
 * @returns Get the first number from the user by calling this function
 */
function getNumber1() {
    return prompt("Enter your number 1 :", "Enter first number...")
}

/**
 * @returns Get a second number from the user by calling this function
 */
function getNumber2() {
    return prompt("Enter your number 2 :", "Enter second number...")
}

/**
 * @param {*} number Get the amount that the user has entered
 * @returns Send a factorial taken from the number entered by the user
 */
function factorial(number) {
    if (number === 0) {
        return 1
    } else {
        return number * factorial(number - 1)
    }
}

/**
 * @param {*} number Get the amount that the user has entered
 * @returns Send a ]sPrime taken from the number entered by the user
 */
function isPrime(number) {
    for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
        if (number % i === 0) {
            return false
        }

    }
    return number > 1
}

/**
 * Converting the functions of this project into a module to use these functions in other js files
 */
export { getOperationInput, getNumber1, getNumber2, factorial, isPrime, typeOperations, allOperations }