class Pokemon {
    constructor(name, imageUrl, special) {
        this.name = name
        this.imageUrl = imageUrl
        this.special = special
    } 
}

function choose(name, imageUrl, special) {
    let pokemon = new Pokemon(name, imageUrl, special)
    sessionStorage.setItem("Pokemon", JSON.stringify(pokemon))
    location.href = "battle.html"    
} 

