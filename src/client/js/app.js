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
        console.log(geo)
        const weatherData = await getWeather(geo)
        
        console.log(weatherData) 

        const temp = weatherData.data[0].temp;
        console.log(temp)


    })
}



export {getIt}