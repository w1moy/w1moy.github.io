const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5ccb56d01530a63b1c9276906281171d&id=5604473&units=imperial";
//console.log (apiURL)

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log (jsObject);

        //summary
        document.getElementById("current").textContent = jsObject.list[0].weather[0].description;
        document.getElementById("temp").textContent = jsObject.list[0].main.temp;
        document.getElementById("humidity").textContent = jsObject.list[0].main.humidity;
        document.getElementById("speed").textContent = jsObject.list[0].wind.speed;
        //console.log(jsObject);

        //Five Day Forcast
        const fiveday = jsObject.list.filter((x) => x.dt_txt.includes("18:00:00"));
        //console.log(fiveday);
        let day = 0;
        const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        fiveday.forEach ((x) =>{
            let d = new Date(x.dt_txt);
            document.getElementById(`day${day+1}`).textContent = dayofweek[d.getDay()];
            document.getElementById(`temperature${day+1}`).textContent = x.main.temp;
            const imagesrc = `http://openweathermap.org/img/w/${fiveday.weather[0].icon}.png`;
            const desc = fiveday.weather[0].description;
            document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
            day++;
        });
        });
