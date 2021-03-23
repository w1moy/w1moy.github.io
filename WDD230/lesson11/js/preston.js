const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5ccb56d01530a63b1c9276906281171d&id=5604473&units=imperial";
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

        fiveday.forEach(x => {
            let d = new Date(x.dt_txt);
            //console.log(d);
            document.getElementById(`day${day+1}`).textContent = dayofweek[d.getDay()];

            document.getElementById(`temperature${day+1}`).innerHTML = Math.round(x.main.temp) + "&#176;F";

            const src = 'https://openweathermap.org/img/wn/' + x.weather[0].icon + "@2x.png";
            const alt = x.weather[0].description;
            document.getElementById(`icon${day+1}`).setAttribute('src', src);
            document.getElementById(`icon${day+1}`).setAttribute('alt', alt);
            day++;
        });
    });

/*events*/
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);
        const towns = jsonObject['towns'];

        const preston = towns.filter(x => x.name === "Preston");
        const sort = [];
        sort.push(...preston)
        //console.log(sort);

        sort.forEach(town => {
            let event = document.createElement('div');
            let events = document.createElement('p');

            events.textContent = `${town.events}`;

            event.appendChild(events);

            document.querySelector('.event').appendChild(event);
        });

        //pancake banner//
        var date = new Date();
        var day = date.getDay();
        if (day == 5) {
            var ban = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion."
            document.getElementById("prestonPancakes").innerHTML = ban;
        } else {
            document.getElementById("prestonPancakes").style.display = "none";
        }
    })