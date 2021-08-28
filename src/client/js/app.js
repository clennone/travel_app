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


            cleanValue();
        }

        

        //update UI
        // const card = document.getElementById('card-info');





    })
}



export {getIt}