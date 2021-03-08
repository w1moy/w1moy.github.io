const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        //for (let i = [0]; i<towns.length; i++)
        //if (towns[i].name === "Fish Haven" || town[i].name === "Preston" || towns[i].name === "Soda Springs")

        const card = document.querySelector('div.home');

        towns.forEach(town => {
            let home = document.createElement('section');
            let name = document.createElement ('h2');
            let motto = document.createElement ('h3');
            let founded = document.createElement ('p');
            let population = document.createElement ('p');
            let rainfall = document.createElement ('p');
            let img = document.createElement ('img');

            name.textContent = `${town.name}`;
            motto.textContent = `${town.motto}`;
            founded.textContent = "Founded:" +`${town.yearFounded}`;
            population.textContent = "Population" +`${town.currentPopulation}`;
            rainfall.textContent = "Rainfall/Year" + `${town.averageRainfall}`;
            img.src = `images/${town.photo}`;

            card.appendChild(name);
            card.appendChild(home);
            card.appendChild(motto);
            card.appendChild(founded);
            card.appendChild(population);
            card.appendChild(rainfall);
            card.appendChild(img);

        });
    })