 var a = document.getElementById("photo")
 a.addEventListener('dblclick',liker)


function liker() {

    // document.getElementById("ab").style.backgroundColor = "lightblue";
    var ani =   document.getElementById("ab")
    ani.style.backgroundColor = "red"
}

var ani = document.getElementById("ab")
ani.addEventListener("click",noliker)

function noliker() {
    ani.style.backgroundColor = "white"
}