// let input = "h!e@l#l$o";
let symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "`",
    "~",
    "{",
    "}",
    "[",
    "]",
    ";",
    ":",
    "|",
    ",",
    "<",
    ">",
    ".",
    "/",
    "?"
];

let characters = [];
let lenNum = 0;
let textInput = document.querySelector("#textInput");
let BTNResult = document.querySelector("#BTNResult");
let result = document.querySelector("#result");

BTNResult.addEventListener("click", () => {
    result.textContent = "";
    lenNum = 0;
    characters = textInput.value.split("");
    characters.forEach((element) => {
        if (symbols.includes(element)) {
            ++lenNum;
        }
    });
    result.append(`Number symbols in your text : ${lenNum}`);
    textInput.value = "";
});
