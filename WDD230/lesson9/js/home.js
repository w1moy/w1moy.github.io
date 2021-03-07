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
            let name = document.createElement ('name');
            let moto = document.createElement ('moto');
            let founded = document.createElement ('founded');
            let population = document.createElement ('population');
            let rainfall = document.createElement ('rainfall');
            let img = document.createElement ('img');

            name.textContent = `${town.name}`;
            moto.textContent = `${town.moto}`;
            founded.textContent = `${town.yearFounded}`;
            population.textContent = `${town.currentPopulation}`;
            rainfall.textContent = `${town.averageRainfall}`;
            img.src = `${img.photo}`;

            card.appendChild(name);
            card.appendChild(home);
            card.appendChild(moto);
            card.appendChild(founded);
            card.appendChild(population);
            card.appendChild(rainfall);
            card.appendChild(img);

        });
    })