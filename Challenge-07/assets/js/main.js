let counter = 0

function setCounter() {
    const number = document.getElementById('numberInput').value

    if (!isValidNumber(number)) {
        return

    }

    counter = Number(number)

    showResult(counter)
}

function showResult(text) {
    document.getElementById('result').textContent = text

}

function isValidNumber(number) {
    if (isNaN(Number(number))) {
        showResult('⚠️ Not a Number')
        return false

    } else if (number === 'Infinity') {
        showResult('⚠️ Infinity !!!')
        return false

    }

    return true
}

function addCounter() {
    counter += 1
    showResult(counter)

}

function subCounter() {
    counter -= 1
    showResult(counter)

}

document.getElementById('BTNAdd').addEventListener('click', setCounter)
document.getElementById('BTNPlus').addEventListener('click', addCounter)
document.getElementById('BTNMin').addEventListener('click', subCounter)