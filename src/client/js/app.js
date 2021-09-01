// get value 
import { cleanFinaldate, cleanValue, validateValue } from "./validateValue";
import { errorDates } from "./validateDates";
import { getGeo } from "./getdata/getGeo";
import { getWeather } from "./getdata/getWeather";
import { getImage } from "./getdata/getImage";
import { getCountry } from "./getdata/getCountry";
import { createDiv } from "./updateUI";

const btnSubmit = document.getElementById('btn_submit');

function getIt() {
    btnSubmit.addEventListener('click',async function(e){
        e.preventDefault();
        
        let {cityName,initial,ending,daysLeft,daysIn} = validateValue();

        // check values y validatevalues tiene que ser diferente
        // uno que solo me de datos
        // otro que chequee con errorDates
        if (errorDates(initial,ending)){

            alert('Finish date has to be after the start date')
            cleanFinaldate();
            
        }else{
            const geo = await getGeo(cityName,initial,ending);
            const weatherData = await getWeather(geo)
            const img = await getImage(cityName,geo.geoCountry)
            const textCountry = await getCountry(geo.geoCode);

            const data = {
                img,
                daysIn,
                daysLeft,
                city: cityName,
                country : geo.geoCountry,
                start: initial,
                end: ending,
                text: textCountry,
                stemp: '1',
                spres: '2',
                shum: '3',
                etemp: '1',
                epres: '2',
                ehum: '3'
            }
            
            createDiv(data);


            
            cleanValue();
        }

        
    })
}



export {getIt}