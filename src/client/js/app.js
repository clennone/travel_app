// get value 
import { cleanFinaldate, cleanValue, returnValues } from "./validateValue";
import { errorDates, getDate, validateDates } from "./validateDates";
import { getGeo } from "./getdata/getGeo";
import { getWeather } from "./getdata/getWeather";
import { getImage } from "./getdata/getImage";
import { getCountry } from "./getdata/getCountry";
import { createDiv } from "./updateUI";

const btnSubmit = document.getElementById('btn_submit');
const deleteBtn = document.getElementByClass('dlt_btn');

function getIt() {
    btnSubmit.addEventListener('click',async function(e){
        e.preventDefault();


        let {city,initial,ending,daysLeft,daysBetween} = returnValues();
        
 
        if (validateDates(city,initial,ending)){
            alert('You must enter all the fields');            
        }else if (errorDates(initial,ending)){
            alert('Finish date has to be after the start date')
            cleanFinaldate();
        }else{
            const geo = await getGeo(city);
            const weatherData = await getWeather(geo);
            const img = await getImage(city,geo.geoCountry);
            const text = await getCountry(geo.geoCode);
            console.log(weatherData);

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
            }
            
            createDiv(data);


            
            cleanValue();

        }

        
    })
}




export {
    getIt
}