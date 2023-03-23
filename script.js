let poke = document.querySelectorAll(".starter")
poke.forEach((pokemon) => {
    pokemon.addEventListener("click", function choose() {
        if(pokemon.classList.contains("cynd")) {
            let image = document.createElement("img")
            let imageParent = document.getElementsByClassName("choice")
            image.className = "player1"
            image.src = "Cyndaquil.png"
            imageParent.appendChild(image)
            console.log(imageParent)
            console.log(image)
        } else if (pokemon.classList.contains("chik")) {
            
        } else if (pokemon.classList.contains("toto")) {
            
        }
    })
})

