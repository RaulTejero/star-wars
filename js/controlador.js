async function getAll(pUrl) {

    let url = pUrl;
    let peticion = await fetch(url, { method: 'GET' });
    if (peticion.status == 200) {
        let json = await peticion.json();
        let pageNext = json.next;
        let pagePrev = json.previous;
        printResult(json.results, pagePrev, pageNext);
    }
}

getAll('https://swapi.dev/api/people/?page=1');

async function getOne(pUrl, pType = 'people') {

    let url = pUrl;
    let peticion = await fetch(url, { method: 'GET' });
    if (peticion.status == 200) {
        let json = await peticion.json();
        if (pType == 'people') {
            printCharacter(json);
        } else if (pType == 'film') {
            printFilm(json);
        } else if (pType == 'vehicles') {
            printVehicles(json)
        }
    }
}


// vehiculos