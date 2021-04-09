const requestURL = "https://my-json-server.typicode.com/w1moy/directoryjson/business";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);})  // temporary checking for valid response and data parsing
        const bis = jsonObject['business'];

        const cards = document.querySelector('div.directory');


        bis.forEach(business => {
            let card = document.createElement('section');
            let name = document.createElement('h2');
            let title = document.createElement('p');
            let phone = document.createElement('p');
            let email = document.createElement('p');


            //template literals
            name.textContent = `${business.name}`;
            title.textContent = "Title: " + `${business.title}`;
            phone.textContent = "Phone: " + `${business.phone}`;
            email.textContent = "Email: " + `${business.email}`;

            div.appendChild(name);
            cards.appendChild(card);
            div.appendChild(title);
            div.appendChild(phone);
            div.appendChild(email);
        });
    });