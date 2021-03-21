const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        //console.table(jsonObject);
        const towns = jsonObject['towns'];
       
        const fishhaven = towns.filter (x =>x.name == "Fish Haven");
        const preston = towns.filter (x => x.name === "Preston");
        const sodasprings = towns.filter (x => x.name === "Soda Springs");
        const sort = [];
        sort.push (...fishhaven, ...preston, ...sodasprings)
        //console.log(sort);

        sort.forEach(town => {
            let event = document.createElement('div');
            let events = document.createElement('p');

            events.textContent = `${town.events}`;
            
            event.appendChild(events);
            
            document.querySelector('.event').appendChild(event);
        });
    })