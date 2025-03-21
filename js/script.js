const obtenerInfo = document.getElementById("get-pokemon");
const mostrarInfo = document.getElementById("mostrarinfo");
const evolucionar = document.getElementById("button");

let currentPokemon = {};

obtenerInfo.addEventListener("click", () => {
    const name = document.getElementById("pokemon-select").value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Algo no funciona...");
            }
            return response.json();
        })
        .then((data) => {
            currentPokemon = data;

            mostrarInfo.innerHTML = `
                <h2 id="pokemon-name">${data.species.name.toUpperCase()}</h2>
                <img id="pokemon-img" class="img" src="${data.sprites.front_default}" alt="${data.species.name}">
                <p>${data.types.map(type => type.type.name).join(", ")}</p>
            `;
        })
});


evolucionar.addEventListener("click", () => {
    let nombrePokemon = document.getElementById("pokemon-name");
    let imagenPokemon = document.getElementById("pokemon-img");

    if (nombrePokemon && imagenPokemon && nombrePokemon.textContent.toLowerCase() === "bulbasaur") {
        fetch(`https://pokeapi.co/api/v2/pokemon/ivysaur`)
            .then((response) => response.json())
            .then((data) => {
                nombrePokemon.textContent = "IVYSAUR";
                imagenPokemon.src = data.sprites.front_default;
            })
    }
});
evolucionar.addEventListener("click", () => {
    let nombrePokemon = document.getElementById("pokemon-name");
    let imagenPokemon = document.getElementById("pokemon-img");

    if (nombrePokemon && imagenPokemon && nombrePokemon.textContent.toLowerCase() === "charmander") {
        fetch(`https://pokeapi.co/api/v2/pokemon/charmeleon`)
            .then((response) => response.json())
            .then((data) => {
                nombrePokemon.textContent = "CHARMELEON";
                imagenPokemon.src = data.sprites.front_default;
            })
    }
});
evolucionar.addEventListener("click", () => {
    let nombrePokemon = document.getElementById("pokemon-name");
    let imagenPokemon = document.getElementById("pokemon-img");

    if (nombrePokemon && imagenPokemon && nombrePokemon.textContent.toLowerCase() === "squirtle") {
        fetch(`https://pokeapi.co/api/v2/pokemon/wartortle`)
            .then((response) => response.json())
            .then((data) => {
                nombrePokemon.textContent = "WARTORTLE";
                imagenPokemon.src = data.sprites.front_default;
            })
    }
});
