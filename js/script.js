const obtenerInfo = document.getElementById("get-pokemon");
const mostrarInfo = document.getElementById("mostrarinfo")

obtenerInfo.addEventListener("click", () => {
    const name = document.getElementById("pokemon-select").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
            if(!response.ok){
                throw new Error ("Algo no funciona...");  
            }
            return response.json();
        })
        .then((data) => {
                mostrarInfo.innerHTML =
                 `<h2>${data.species.name.toUpperCase()}</h2>
                <img class="img" src="${data.sprites.front_default}" alt="${data.species.name}">
                <p>${data.types.map(type => type.type.name).join(", ")}</p>`

            })
        }

    );

