function signupHandler(){
    const age = document.getElementById('user-input').value

    if (!isValidNumber(age)){
        return

    }

    const convertToNumber = Number(age)

    if (age >= 18){
        showResult('Success Sign-up')

    } else {
        showResult('Fail Sign-up')

    }
}


function showResult(text){
    document.getElementById('result').textContent = text

}


function isValidNumber(number){
    if(isNaN(Number(number))){
        showResult('⚠️ Not a Number')
        return false

    } else if (number <= 0){
        showResult('⚠️ Invalid Age')
        return false

    } else if (number === 'Infinity'){
        showResult('⚠️ Infinity !!!')
        return false

    } else if (Number(number) % 1 !== 0){
        showResult('⚠️ Float is invalid')
        return false

    }

    return true
}

document.getElementById('user-submit').addEventListener('click', signupHandler)