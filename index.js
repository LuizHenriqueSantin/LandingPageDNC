var card1 = window.document.getElementById("card-1")
var card2 = window.document.getElementById("card-2")
var card3 = window.document.getElementById("card-3")
var left = window.document.getElementById("left")
var right = window.document.getElementById("right")

function next(){

}

function next(){
    card1.style = "display: none"
    right.style = "background-image: url(); cursor: auto;"
    left.style = "background-image: url(assets/preview.png); cursor: pointer;"
    card3.style = "display: flex"
}

function preview(){
    card3.style = "display: none"
    right.style = "background-image: url(assets/next.png); cursor: pointer;"
    left.style = "background-image: url(); cursor: auto;"
    card1.style = "display: flex"
}