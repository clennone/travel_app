// get value 
import { cleanFinaldate, cleanValue, returnValues } from "./validateValue";
import { errorDates, getDate, validateDates } from "./validateDates";
import { getGeo } from "./getdata/getGeo";
import { getWeather } from "./getdata/getWeather";
import { getImage } from "./getdata/getImage";
import { getCountry } from "./getdata/getCountry";
import { createDiv } from "./updateUI";



async function catchInfo() {
        let {city,initial,ending,daysLeft,daysBetween} = returnValues();
        
 
        if (validateDates(city,initial,ending)){
            alert('You must enter all the fields');            
        }else if (errorDates(initial,ending)){
            alert('Finish date has to be after the start date')
            cleanFinaldate();
        }else{
            const mainData = document.getElementById('main');
            const loader = document.getElementById('loader');
            loader.classList.remove('display-none')
            loader.classList.add('display-on')

            const geo = await getGeo(city);
            const weatherData = await getWeather(geo);
            const img = await getImage(city,geo.geoCountry);
            const text = await getCountry(geo.geoCode);

            const data = {
                img,
                daysBetween,
                daysLeft,
                city,
                country : geo.geoCountry,
                initial: getDate(initial),
                ending: getDate(ending),
                text,
                temp: weatherData.data[0].temp,
                pres: weatherData.data[0].pres,
                hum: weatherData.data[0].rh,
                code: weatherData.data[0].weather.icon
            }

            createDiv(data);
            
            setTimeout( () => {
                cleanValue(city,initial,ending);
                loader.classList.remove('display-on')
                loader.classList.add('display-none')
                mainData.classList.remove('display-none')
                pushScroll();
            },1000);

        }
}

function pushScroll () {
    const head = document.querySelector('.header');
    let headPos = head.getBoundingClientRect();
    let headbtm = headPos.bottom;
    window.scrollTo({top: headbtm, behavior:'smooth'});
}

export {
    catchInfo,
    pushScroll
}