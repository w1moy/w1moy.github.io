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
            let h3 = document.createElement('h2');
            let name = document.createElement ('p');
            let services = document.createElement ('p');
            let schedule = document.createElement ('p');
            let history = document.createElement ('p');
            let img = document.createElement ('mg');

            //h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            //bdate.textContent = "Date of Birth:" + " " + prophets[i].birthdate;
            //bplace.textContent = "Place of Birth:" + " " + prophets[i].birthplace;
            //img.setAttribute('src',prophets[i].imageurl);
            //img.setAttribute('alt', prophets [i].name + ' ' + prophets[i].lastname, + '-' + prophets[i].order);

            temple.appendChild(h3);
            temple.appendChild(name);
            temple.appendChild(services);
            temple.appendChild(img);
            temple.appendChild(schedule);
            temple.appendChild(history);

            document.querySelector('div.temple').appendChild(temple);

        }

    })