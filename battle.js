const p1Life = document.querySelector('.p1Life')
const p2Life = document.querySelector('.p2Life')
const leer = document.querySelector(".leer")
const tackle = document.querySelector(".tackle")
let text = document.querySelector(".text")
let specials = document.querySelector(".specials")
let counter = 0
const box = document.getElementsByClassName("delay")
let pika = document.querySelector(".text1")
let spec = document.querySelector(".specials")
let spec1 = document.querySelector(".p2Life")
let spec2 = spec1.innerText
let spec3 = parseInt(spec2)
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
    setTimeout(() => {    
        // 👇️ removes element from DOM
        text.innerHTML = '<span class="delay"></span>'
    
        // 👇️ hides element (still takes up space on page)
        // box.style.visibility = 'hidden';
      }, 1000);
});

tackle.addEventListener("click", function() {
    text.innerHTML = "You tickle the Chungus"
    spec3 += 1
    spec1.innerText = spec3.toString()
    setTimeout(() => {    
        // 👇️ removes element from DOM
        text.innerHTML = '<span class="delay"></span>'
    
        // 👇️ hides element (still takes up space on page)
        // box.style.visibility = 'hidden';
      }, 1000);
});

leer.addEventListener("click", function() {
    text.innerHTML = "Your gazes only make him stronger"
    spec3 += 3
    spec1.innerText = spec3.toString()
    setTimeout(() => {    
        // 👇️ removes element from DOM
        text.innerHTML = '<span class="delay"></span>'
    
        // 👇️ hides element (still takes up space on page)
        // box.style.visibility = 'hidden';
      }, 1000);
});

spec.addEventListener("click", function () {
    if (spec3 > 0) {
        spec3 -= 2
        spec1.innerText = spec3.toString()
    }
})
let spec4 = document.querySelector(".p1Life")
let spec5 = spec4.innerText
let spec6 = parseInt(spec5)
let cycle = document.querySelector(".life")
function incrementCounter() {
    counter ++
    if (counter == 1) {
        pika.innerHTML = "YOU FOOL !"
        setTimeout(() => {    
            // 👇️ removes element from DOM
            pika.innerHTML = ""
        
            // 👇️ hides element (still takes up space on page)
            // box.style.visibility = 'hidden';
          }, 2000);
    } else if (counter == 2) {
        pika.innerHTML = "I will destroy you"
        setTimeout(() => {    
            // 👇️ removes element from DOM
            pika.innerHTML = ""
        
            // 👇️ hides element (still takes up space on page)
            // box.style.visibility = 'hidden';
            }, 2000);
    } else if (counter == 3) {
        pika.innerHTML = "Guuuuurl, better back up"
        setTimeout(() => {    
            // 👇️ removes element from DOM
            pika.innerHTML = ""
        
            // 👇️ hides element (still takes up space on page)
            // box.style.visibility = 'hidden';
          }, 2000);
    } else if (counter == 4) {
        spec6 -= 25
        spec4.innerText = spec6.toString()
        cycle.classList.remove("life")
    }
}
