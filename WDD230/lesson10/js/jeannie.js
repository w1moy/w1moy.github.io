let cityid = 5604473;
let appid = `940c61dc043548cf22846b340486879f`;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=940c61dc043548cf22846b340486879f&units=imperial&`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        let t = (jsObject.main.temp);
        let s = (jsObject.wind.speed);
        let windchill = "N/A";
        document.getElementById('weather').innerHTML = jsObject.weather[0].description;
        document.getElementById('').innerHTML = Math.round(t) + "&#176;";
        if (t <= 50 && s >= 3) {
            let w = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
            windchill = Math.round(w);
          };
    });