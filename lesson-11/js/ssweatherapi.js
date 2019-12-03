const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=7494dab38cd1d431535219210538b2c4';

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
		console.log(jsObject);

		const desc = jsObject.weather[0].description;
		document.getElementById('description').textContent=desc;

		const windspeed = jsObject.wind.speed;
		document.getElementById('wind-speed').textContent=windspeed;
	
		document.getElementById('current-temp').textContent=jsObject.main.temp;
		
		document.getElementById('humidity').textContent=jsObject.main.humidity;
		  
});