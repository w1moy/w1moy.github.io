const apiURL='https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=7494dab38cd1d431535219210538b2c4';

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) =>{
    console.log(jsObject);
    for (let i = 0; i < jsObject.list.length; i++) {
    if (jsObject.list[i].main.temp.includes('18:00:00')) {
        console.log(jsObject.list[i].main.temp.toFixed(0));
    }
    }
});