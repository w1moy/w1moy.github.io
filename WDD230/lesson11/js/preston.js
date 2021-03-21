const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        //console.table(jsonObject);
        const towns = jsonObject['towns'];
       
        const preston = towns.filter (x => x.name === "Preston");
        const sort = [];
        sort.push (...preston)
        console.log(sort);

        sort.forEach(town => {
           let event = document.createElement('div');
           let events = document.createElement('p');

           events.textContent = `${town.events}`;
            
           event.appendChild(events);
            
           document.querySelector('.event').appendChild(event);
        });
    })