function numberAdder(number) {
    return number * (number + 1) / 2

}


function numberAdderHandler() {
    const number = document.getElementById('numberInput').value


    const convertToNumber = Number(number)

    const sumOf_aSetOfNumbers = numberAdder(convertToNumber)

    showResult(sumOf_aSetOfNumbers)
}


function showResult(text) {
    document.getElementById('showResult').textContent = text

}



document.getElementById('BTNResult').addEventListener('click', numberAdderHandler)