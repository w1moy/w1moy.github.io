const requestURL = "https://my-json-server.typicode.com/w1moy/boardjson/directors";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);})  // temporary checking for valid response and data parsing
        const directors = jsonObject['directors'];

        const cards = document.querySelector('div.cards');


        directors.forEach(director => {
            let card = document.createElement('section');
            let name = document.createElement('h2');
            let title = document.createElement('p');
            let phone = document.createElement('p');
            let email = document.createElement('p');


            //template literals
            name.textContent = `${director.name}`;
            title.textContent = "Title: " + `${director.title}`;
            phone.textContent = "Phone: " + `${director.phone}`;
            email.textContent = "Email: " + `${director.email}`;

            div.appendChild(name);
            cards.appendChild(card);
            div.appendChild(title);
            div.appendChild(phone);
            div.appendChild(email);
        });
    });