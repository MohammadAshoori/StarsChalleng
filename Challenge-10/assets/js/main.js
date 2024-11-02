function characterCounting(text) {

    let characterSize = []

    const separatingCharacters = text.split(' ')
    console.log(separatingCharacters);
    separatingCharacters.forEach(Character => {
        if (Character !== '') {
            characterSize.push(Character)
        }
    });

    return characterSize.length

}

const receivedText = prompt('Enter your text : ', 'Hello Worlds...')

if (receivedText) {

    alert(`The number of characters in your text : ${characterCounting(receivedText)}`)

} else alert('try again')