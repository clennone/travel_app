// get value 
import { validateValue } from "./validateValue";
import { getGeo } from "./getGeo";
import { getWeather } from "./getWeather";

const btnSubmit = document.getElementById('btn_submit');

function getIt() {
    btnSubmit.addEventListener('click',async function(e){
        e.preventDefault();
        
        let {cityName,initial,ending,daysLeft,daysIn} = validateValue();
        
        const geo = await getGeo(cityName,initial,ending);
        const weatherData = await getWeather(geo);
        console.log(weatherData)
        


    })
}


export {getIt}