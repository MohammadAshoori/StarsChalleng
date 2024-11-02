const mathOperators = ['+', '-', '*', '/']

function operatorSum(number1, number2){
    showResult(number1 + number2)

}

function operatorSub(number1, number2){
    showResult(number1 - number2)

}

function operatorMul(number1, number2){
    showResult(number1 * number2)

}

function operatorDiv(number1, number2){
    if(number2 === 0){
        showResult('Division by zero')

    }

    showResult(number1 / number2)
}

function calculatorHandler(){
    const number1 = document.getElementById('NOinput-1').value
    const mathOperator = document.getElementById('NOinput-2').value
    const number2 = document.getElementById('NOinput-3').value

    if (!isValidNumber(number1)){
        return

    }
    if (!isValidNumber(number2)){

    }
    if (!mathOperators.includes(mathOperator)){
        showResult('Invalid Operator')
        return

    }

    const convertToNumber1 = Number(number1)
    const convertToNumber2 = Number(number2)

    // Call the operator function
    switch (mathOperator) {
        case '+':
            operatorSum(convertToNumber1, convertToNumber2)
            break;

        case '-':
            operatorSub(convertToNumber1, convertToNumber2)
            break;

        case '*':
            operatorMul(convertToNumber1, convertToNumber2)
            break;

        case '/':
            operatorDiv(convertToNumber1, convertToNumber2)
            break;
    
        default:
            break;
    }
}

function showResult(text){
    document.getElementById('showResult').textContent = text

}

function isValidNumber(number){
    if(isNaN(Number(number))){
        showResult('Not a Number')
        return false

    } else if (number === 'Infinity'){
        showResult('Infinity !!!')
        return false

    }

    return true
}

document.getElementById('user-submit').addEventListener('click', calculatorHandler)