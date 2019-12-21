const requestURL = 'https://api.myjson.com/bins/j1ou0';

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		console.table(jsonObject);
		const temples = jsonObject['temples'];
		for (let i = 0; i < temples.length; i++) {
			let temple = document.createElement('section');
			let h3 = document.createElement('h3');
			let name = document.createElement('p');
			let services = document.createElement('p');
			let schedule = document.createElement('p');
			let history = document.createElement('p');
			let img = document.createElement('mg');

			name.textContent = temple[i].name;
			services.textContent = "Services" + " " + temple[i].services;
			schedule.textContent = "Schedule:" + " " + temple[i].schedule;
			history.textContent = "History:" + " " + temple[i].history;
			img.setAttribute('src', temple[i].imageurl);
			img.setAttribute('alt', temple[i].name);

			temple.appendChild(h3);
			temple.appendChild(name);
			temple.appendChild(services);
			temple.appendChild(img);
			temple.appendChild(schedule);
			temple.appendChild(history);

			document.querySelector('div.temple').appendChild(temple);

		}

	})