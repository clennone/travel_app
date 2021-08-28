
const createDiv = (data) => {
    const card = document.getElementById('card-info');
    const divCard = document.createElement('div');

    const contentCard = `
    <img src="${data.img}" alt="imagen" class="city-img">
    <p class="stay-days">You'll Stay ${data.daysIn} days in:</p>
    <p class="city-name">${data.city} - ${data.country}</p>
    <p class="city-start-date">Arrived: <span>${data.start}</span></p>
    <p class="city-end-date">Departed: <span>${data.end}/span></p>
    <div class="start-weather">
    <h5 class="start-title">Arrived Weather</h5>
    <p class="start-temp">Temperature: ${data.s-temp}</p>
    <p class="start-pressure">Pressure: ${data.s-pres}</p>
    <p class="start-humidity">Humidity: ${data.s-hum}</p>
    </div>
    <div class="end-weather">
    <h5 class="end-title">Departure Weather</h5>
    <p class="end-temp">Temperature: ${data.e-temp}</p>
    <p class="end-pressure">Pressure: ${data.e-pres}</p>
    <p class="end-humidity">Humidity: ${data.e-hum}</p>
    </div>
    <p class="city-context">${data.text}</p>
    <p class="days-left">Days left: ${data.daysLeft} </p>`;

    divCard.className = 'card-data';
    divCard.innerHTML = contentCard;
    card.insertAdjacentElement('afterbegin',divCard);

}