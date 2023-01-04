var startbtn = document.querySelector(".startbtn")
var heading = document.querySelector(".heading")
var gameField = document.querySelector(".all")
var item = document.querySelectorAll(".item")
var question = document.querySelectorAll(".question")
var points = document.querySelector(".points")
var pointsNum = 0
var answer = document.querySelectorAll(".answer")

startbtn.addEventListener("click", function () {
    startbtn.style.display = "none"
    gameField.style.display = "flex"
    heading.style.display = "none"
})

for (var i = 0; i < item.length; i++) {

    item[i].addEventListener("click", function () {
        var random = Math.floor(Math.random() * item.length + 1)
        this.style.opacity = "0"
        var questionCurrent = question[random]
        questionCurrent.style.display = "inline-block"
    })


}

for (var i = 0; i < answer.length; i++) {

    answer[i].addEventListener("click", function () {
        if (this.classList.contains("correct")) {
            pointsNum++
            points.innerHTML = pointsNum
            points.style.color = "white"
            for (var i = 0; i < question.length; i++) {
                if (question[i].style.display != "none") {
                    question[i].style.display = "none"
                }
            }
        } else {
            pointsNum--
            points.innerHTML = pointsNum
            points.style.color = "red"
            for (var i = 0; i < question.length; i++) {
                if (question[i].style.display != "none") {
                    question[i].style.display = "none"
                }
            }
        }

    })


}
