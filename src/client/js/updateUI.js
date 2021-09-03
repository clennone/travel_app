
export const createDiv = (data) => {
    const card = document.getElementById('card-info');
    const divCard = document.createElement('div');

    const contentCard = `
    <img src="${data.img}" alt="imagen" class="city-img">
    <p class="stay-days">You'll Stay <span>${data.daysBetween}</span> days in:</p>
    <p class="city-name">${data.city} - ${data.country}</p>
    <p class="city-start-date">Arrived: <span>${data.initial}</span></p>
    <p class="city-end-date">Departed: <span>${data.ending}</span></p>
    <div class="weather">
    <h5 class="weather-title">Weather:</h5>
    <p class="temp">Temperature: ${data.temp} </p>
    <p class="pressure">Pressure: ${data.pres}</p>
    <p class="humidity">Humidity: ${data.hum}</p>
    </div>
    <div class="city-context">${data.text}</div>
    <p class="days-left">Days left to plan: ${data.daysLeft} days</p>
    <button onclick="deleteCard()">Try it</button>`;

    divCard.className = 'card-data';
    divCard.innerHTML = contentCard;
    card.insertAdjacentElement('afterbegin',divCard);

}