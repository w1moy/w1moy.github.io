const requestURL = 'https://cit230/w1moy.github.io/templeinn/js/temples.json';

fetch(requestURL)
    .then(function (response){
        return response.json(); 
    })
    .then(function(jsonObject){
        //console.table(jsonObject);
        const temples = jsonObject['temples'];
        for (let i=0; i< temples.length; i++){
            let temple = document.createElement ('section');
            let h3 = document.createElement('h3');
            let name = document.createElement ('p');
            let services = document.createElement ('p');
            let schedule = document.createElement ('p');
            let history = document.createElement ('p');
            let img = document.createElement ('mg');

            h3.textContent = temples[i].name;
            services.textContent = "Services" + " " + temples[i].services;
            schedule.textContent = "Schedule:" + " " + temples[i].schedule;
            history.textContent = "History:" + " " + temples[i].history;
            img.setAttribute('src',temples[i].imageurl);
            img.setAttribute('alt', temples [i].name;

            temple.appendChild(h3);
            temple.appendChild(name);
            temple.appendChild(services);
            temple.appendChild(img);
            temple.appendChild(schedule);
            temple.appendChild(history);

            document.querySelector('div.temple').appendChild(temple);

        }

    })