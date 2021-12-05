console.log('I work!');

const fetchData = async () => {
    const url = 'https://gist.githubusercontent.com/diegoavalon/f645c03b00eb782d2468993bd799fef7/raw/d6350660064f13bafc138ab0994f3f4ce1840da3/byui-home.json'
    const resp = await fetch(url);
    const data = await resp.json();

    const {
        news,
        calendar,
        hero
    } = data;

    console.log(newsEl);
    newsEl.innerHTML = `
        <div class="news">
            <div class="news__title">Newsroom</div>
            <div class="news__body">
                <ul class="news__list">${news.map( (event) =>`<li class="news__list-item">Date:${event.date} <br/> ${event.title} ${event.image} <br/> ${event.excert}<br/> ${event.link}</li>`,)

                }</ul>
            </div>
        </div>`;

        console.log(calendarEl);
        calendarEl.innerHTML =`
        <div class="calendar">
        <div class="calendar__title">Important Dates</div>
        <div class="calendar__body">
            <ul class="calendar__list">${calendar.map( (event) =>`<li class="calendar__list-item">Date:${event.date} <br/> ${event.title}</li>`,)

            }</ul>
        </div>
    </div>`;
    console.log(news);
    console.log(hero);

    console.log(heroEl);
    heroEl.innerHTML =`
    <div class="hero">
    <div class="hero__body">
        <card class="hero__list">${hero.subSections.map( (event) =>` <img class="hero__image" src=${event.image} <card class="hero__list-item">${event.text}</card>`,)
        }</ul>
    </div>
</div>`;
    
};
fetchData();