const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        //console.table(jsonObject);
        const towns = jsonObject['towns'];
       
        const fishhaven = towns.filter (x =>x.name == "Fish Haven");
        const preston = towns.filter (x => x.name === "Preston");
        const sodasprings = towns.filter (x => x.name === "Soda Springs");
        const sort = [];
        sort.push (...fishhaven, ...preston, ...sodasprings)
        //console.log(sort);

        sort.forEach(town => {
            let home = document.createElement('section');
            let name = document.createElement ('h2');
            let motto = document.createElement ('h3');
            let founded = document.createElement ('p');
            let population = document.createElement ('p');
            let rainfall = document.createElement ('p');
            let img = document.createElement ('img');

            name.textContent = `${town.name}`;
            motto.textContent = `${town.motto}`;
            founded.textContent = "Founded: " +`${town.yearFounded}`;
            population.textContent = "Population: " +`${town.currentPopulation}`;
            rainfall.textContent = "Rainfall/Year: " + `${town.averageRainfall}`+"in";
            img.src = `images/${town.photo}`;
            img.alt = `${town.name}`;

            
            
            home.appendChild(name);
            home.appendChild(motto);
            home.appendChild(founded);
            home.appendChild(population);
            home.appendChild(rainfall);
            home.appendChild(img);
            document.querySelector('.home').appendChild(home);
        });
    })