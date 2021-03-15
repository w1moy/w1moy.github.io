
const apiURL = "https://api.openweather.org/data/2.5/forcast?id=5604473&appid=5ccb56d01530a63b1c9276906281171d&units=imperial";
//console.log(apiURL)

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        
       /* //let day = 0;
        //const dayofWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
        //const fiveDays=jsObject.list.filter(x => x.dt_text.includes(18:00:00))
        //console.log(fiveDays);

       // fiveDays.forEach(f => {
           // let d = new Date(dx_text);
          //  let t = fiveDays.main.temp;
           // imagesrc = ;
           // alt = ;
       // });*/
})