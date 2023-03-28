const p1Life = document.querySelector('.p1Life')
const p2Life = document.querySelector('.p2Life')
const leer = document.querySelector(".leer")
const tackle = document.querySelector(".tackle")
const text = document.querySelector(".text")
const specials = document.querySelector(".specials")
function getChoice() {
    let name2 = JSON.parse(sessionStorage.getItem("Pokemon"))
    let name1 = name2.name
    let imageUrl1 = name2.imageUrl
    let special1 = name2.special
    let ash = document.getElementById("player")
    let ketchum = document.createElement("img")
    let mon = document.querySelector("#mon")
    ketchum.className = "image"
    mon.innerHTML = name1
    ketchum.src = imageUrl1
    ash.appendChild(ketchum)
    window.onload=function(){
        document.getElementById("foobar").play();
    }
} 
getChoice();

specials.addEventListener("click", function() {
    text.innerHTML = "You deal damage?"
})
tackle.addEventListener("click", function() {
    text.innerHTML = "You tickle the Bingus"
})
leer.addEventListener("click", function() {
    text.innerHTML = "Your gazes only make him stronger"
})

