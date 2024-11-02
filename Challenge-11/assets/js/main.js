
let numberInput
while (true) {
    let userInput = prompt("Enter a number: ");

    if (!Number.isInteger(Number(userInput) || userInput === null)) {
        continue
    }
    else {
        numberInput = Number(userInput)
        break
    }
}

if (numberInput % 2 === 0) {
    document.body.innerHTML = `The ${numberInput} is even.`;
}

else {
    document.body.innerHTML = `The ${numberInput} is odd.`;
}
