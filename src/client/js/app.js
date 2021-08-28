// get value 
import { cleanFinaldate, cleanValue, validateValue } from "./validateValue";
import { errorDates } from "./validateDates";
import { getGeo } from "./getdata/getGeo";
import { getWeather } from "./getdata/getWeather";
import { getImage } from "./getdata/getImage";

const btnSubmit = document.getElementById('btn_submit');

function getIt() {
    btnSubmit.addEventListener('click',async function(e){
        e.preventDefault();
        
        let {cityName,initial,ending,daysLeft,daysIn} = validateValue();

        if (errorDates(initial,ending)){

            alert('Finish date has to be after the start date')
            cleanFinaldate();
            
        }else{
            const geo = await getGeo(cityName,initial,ending);
            console.log(geo)
    
            const weatherData = await getWeather(geo)
            console.log(weatherData) 
    
            const img = await getImage(cityName,geo.geoCountry)
            console.log(img) 

            const divCard = document.createElement('div');
            divCard.className = 'card-data';
            const contentCard = `
                <img src="${img}" alt="imagen" class="city-img">
                <p class="stay-days">You'll Stay ${daysIn} days in:</p>
                <p class="city-name">${cityName} - ${geo.geoCountry}</p>
                <p class="city-start-date">Arrived: <span>2021-08-26</span></p>
                <p class="city-end-date">Departed: <span>2021-08-27</span></p>
                <div class="start-weather">
                    <h6 class="start-title">Arrived Weather</h6>
                    <p class="start-temp">Temperature: 27</p>
                    <p class="start-pressure">Pressure: 27</p>
                    <p class="start-humidity">Humidity: 27</p>
                </div>
                <div class="end-weather">
                    <h6 class="end-title">Departure Weather</h6>
                    <p class="end-temp">Temperature: 27</p>
                    <p class="end-pressure">Pressure: 27</p>
                    <p class="end-humidity">Humidity: 27</p>
                </div>
                <p class="city-context">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti expedita, laborum illum iste nam perspiciatis vero repellendus iusto possimus rerum eos similique distinctio itaque, accusantium corporis fugit magnam eaque enim!</p>
                <p class="days-left">Days left: XX </p>`;
            divCard.innerHTML=contentCard;
            const card = document.getElementById('card-info');
            card.insertAdjacentElement("afterbegin",divCard)
            cleanValue();
        }

        

        //update UI





    })
}



export {getIt}