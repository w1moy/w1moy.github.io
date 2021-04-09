const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=39.9434&lon=105.1844&exclude=minutely,hourly&appid=5ccb56d01530a63b1c9276906281171d&units=imperial";
//console.log(apiURL);

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log (jsObject);

      //current
        document.getElementById("current").textContent = jsObject.current.weather[0].description;
        document.getElementById("temp").textContent = jsObject.current.temp;
        document.getElementById("humidity").textContent = jsObject.current.humidity;
        //console.log(jsObject);

          //Three Day Forcast
        const threeday = jsObject.daily.filter((x) => x.dt_text);
        //console.log(threeday);
        let day = 0;
        const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

        threeday.forEach (x =>{
            let d = new Date(x.dt_txt);
            //console.log(d);
            document.getElementById(`day${day}`).textContent = dayofweek[d.getDay()];
            document.getElementById(`temperature${day}`).innerHTML = Math.round(x.daily.temp.day) + "&#176;F";
            day++;
        });
        });