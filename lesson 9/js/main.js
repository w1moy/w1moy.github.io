const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})

	.then(function (jsonObject) {
		const towns = jsonObject['towns'];
		for (let i = 0; i <towns.length; i++) {
			if (towns[i].name === "Preston" || towns[i].name === "Soda Springs" || towns[i].name === "Springfield");
			let town = document.createElement('section');
			let h2 = document.createElement('h2');
			let motto = document.createElement('h3');
			let rain = document.createElement('p');
			let pop = document.createElement('p');
			let found = document.createElement('p');
			let img = document.createElement('img');

			h2.textContent = towns[i].name;
			motto.textContent = towns[i].motto;
			found.textContent = "Year Founded:" + " " + towns[i].yearFounded;
			pop.textContent = "Population:" + " " + towns[i].currentPopulation;
			rain.textContent = "Average Rainfall:" + " " + towns[i].averageRainfall;
			img.setAttribute('src',  'images/'+towns[i].photo); 
			img.setAttribute('alt', towns[i].name + " " + 'town photo');


			town.appendChild(h2);
			town.appendChild(motto);
			town.appendChild(found);
			town.appendChild(pop);
			town.appendChild(rain);
			town.appendChild(img);

			document.querySelector('div.town').appendChild(town);

		}
	})