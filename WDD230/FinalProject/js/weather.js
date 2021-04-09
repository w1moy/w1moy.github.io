const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=39.9778&lon=105.1319&exclude=minutely,hourly&appid=5ccb56d01530a63b1c9276906281171d";
//console.log(apiURL);

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log (jsObject);

      //current
        document.getElementById("current").textContent = jsObject.current.weather.description;
        document.getElementById("temp").textContent = jsObject.current.temp;
        document.getElementById("humidity").textContent = jsObject.current.humidity;
        console.log(jsObject);

          /*//Five Day Forcast
        const fiveday = jsObject.list.filter((x) => x.dt_txt.includes("18:00:00"));
        //console.log(fiveday);
        let day = 0;
        const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

        fiveday.forEach (x =>{
            let d = new Date(x.dt_txt);
            //console.log(d);
            document.getElementById(`day${day+1}`).textContent = dayofweek[d.getDay()];

            document.getElementById(`temperature${day+1}`).innerHTML = Math.round(x.main.temp) + "&#176;F";

            const src = 'https://openweathermap.org/img/wn/' + x.weather[0].icon + "@2x.png";
            const alt = x.weather[0].description;
            document.getElementById(`icon${day+1}`).setAttribute('src', src);
            document.getElementById(`icon${day+1}`).setAttribute('alt', alt);
            day++;
        });*/
        });