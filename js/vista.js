let ulPersonaje = document.querySelector('#personajes');
let sectionPersonaje = document.querySelector('#vistaPersonaje');
let btnPrev = document.querySelector('.botones div:first-child');
let btnNext = document.querySelector('.botones div:last-child');


function printResult(pCharacterList, pPagePrev, pPageNext) {
    ulPersonaje.innerHTML = "";

    for (let character of pCharacterList) {
        let li = document.createElement('li');
        let characterName = document.createTextNode(character.name);
        li.dataset.url = character.url;
        li.addEventListener('click', getInfoCharacter);
        li.appendChild(characterName);
        ulPersonaje.appendChild(li);
    }

    btnPrev.dataset.page = pPagePrev;
    btnNext.dataset.page = pPageNext;

    btnPrev.addEventListener('click', goPage);
    btnNext.addEventListener('click', goPage);

    btnPrev.style.display = (pPagePrev) ? 'block' : 'none';
    btnNext.style.display = (pPageNext) ? 'block' : 'none';
}

function goPage(event) {
    getAll(event.target.dataset.page);
}

function getInfoCharacter(event) {
    getOne(event.target.dataset.url)
}

function printCharacter(pCharacter, pStatus) {
    sectionPersonaje.innerHTML = `<h2>${pCharacter.name}</h2>
    <ul>
        <li>Altura:  ${pCharacter.height}</li>
        <li>Peso:  ${pCharacter.mass}</li>
        <li>Color de pelo:  ${pCharacter.hair_color}</li>
        <li>Color de ojos:  ${pCharacter.eye_color}</li>
        <li>Genero:  ${pCharacter.gender}</li>
        <li>Año de nacimiento:  ${pCharacter.birth_year}</li>
    </ul>`



    pCharacter.films.forEach(el => {
        getOne(el, 'film');
    });

    pCharacter.vehicles.forEach(el => {
        getOne(el, 'vehicles');
    });

    sectionPersonaje.innerHTML += `<h2>Peliculas en las que aparece</h2>
    <div id="peliculas"></div>`;

    sectionPersonaje.innerHTML += `<h2>Vehiculos que utiliza</h2>
    <div id="vehicles"></div>`;
}

function printFilm(pObject) {
    let divFilm = document.querySelector('#peliculas');
    divFilm.innerHTML += `
    <article>
    <h3>${pObject.title}</h3>
    <ul>
    <li>Capitulo:  ${pObject.episode_id}</li>
    <li>Director:  ${pObject.director}</li>
    <li>Año:  ${pObject.release_date}</li>
    </ul>
    </article>
    `
}

function printVehicles(pObject) {
    let divVehicles = document.querySelector('#vehicles');

    divVehicles.innerHTML += `
    <article>
    <h3>${pObject.name}</h3>
    <ul>
    <li>Modelo:  ${pObject.model}</li>
        <li>Clase:  ${pObject.vehicle_class}</li>
        <li>Velocidad max:  ${pObject.max_atmosphering_speed}</li>
        <li>Tripulacion:  ${pObject.crew}</li>
        <li>Capadidad de carga:  ${pObject.cargo_capacity}</li>
    </ul>
    </article>
    `

}
