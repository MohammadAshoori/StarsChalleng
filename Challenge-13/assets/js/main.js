const btnClick = document.getElementById("btnClick")

btnClick.addEventListener('click', click)


let numberClicks = 0

const clicksShow = document.createElement("h2")
clicksShow.id = "clicksShow"
document.body.appendChild(clicksShow)

const alartText = document.createElement("h1")
alartText.id = "alartText"
document.body.appendChild(alartText)

function click() {
    ++numberClicks

    document.getElementById("clicksShow").textContent = `The number click of button is : ${numberClicks}`;

    if (numberClicks % 10 === 0) {
        alartText.textContent = "...شما 10 کلیک کرده اید"
    } else document.getElementById("alartText").textContent = ""

}