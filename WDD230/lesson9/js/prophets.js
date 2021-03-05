const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];

    const cards = document.querySelector('div.cards');


    prophets.forEach(prophet => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let p2 = document.createElement('p');
      let image = document.createElement('img');

      //template literals
      h2.innerHTML = `${prophet.name}
      ${prophet.lastname}`;
      p.textContent = "Date of Birth: " + `${prophet.birthdate}` 
      p2.textContent = "Place of Birth: "  + `${prophet.birthplace}`;
      image.setAttribute = ("src", `${prophet.imageurl}`);

      card.appendChild(h2);
      cards.appendChild(card);
      card.appendChild(p);
      card.appendChild(p2);
      


    });

  });