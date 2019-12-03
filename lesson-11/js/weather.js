const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=7494dab38cd1d431535219210538b2c4';

fetch(apiURL)
	.then((response) => response.json())
	.then((jsObject) => {
		//console.log(jsObject);
		var temp = Math.round(jsObject.main.temp);
		var wspeed = jsObject.wind.speed;
		var wchill = windChill(temp, wspeed);
		const desc = jsObject.weather[0].description;
		document.getElementById('description').textContent = desc;
		document.getElementById('wind-speed').textContent = jsObject.wind.speed;
		document.getElementById('current-temp').textContent = jsObject.main.temp;
		document.getElementById('humidity').textContent = jsObject.main.humidity;
		document.getElementById('wind-Chill').textContent = wchill;



		/*function windChill(tempF, speed) {
	
			if (tempF > 50 || speed <= 3) {
				var s = Math.pow(speed, .16);
				var wchill = 35.74 + (0.6215 * tempF) - (35.75 * s) + (.4275 * tempF * s);
				return wchill;
			} else {
				return "N/A";
			}
		}*/


	});