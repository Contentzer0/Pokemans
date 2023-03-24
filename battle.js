function getChoice() {
    let name2 = JSON.parse(sessionStorage.getItem("Pokemon"))
    let name1 = name2.name
    let imageUrl1 = name2.imageUrl
    let special1 = name2.special
    let ash = document.getElementById("player")
    let ketchum = document.createElement("img")
    ketchum.className = "image"
    ketchum.src = imageUrl1
    ash.appendChild(ketchum)
    window.onload=function(){
        document.getElementById("foobar").play();
    }
} 
getChoice();
