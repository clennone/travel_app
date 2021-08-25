import { betweenDates, leftDates, validateDates } from "./validateDates";

const city = document.getElementById('city');
const startDate = document.getElementById('start_date');
const finalDate = document.getElementById('final_date');


export const validateValue = () =>{
    if (city.value==='' || startDate.value.length===0 || finalDate.value.length===0){ 
        alert('You must enter all the fields');
    } else{
        const cityName = city.value;
        const initial = startDate.value;
        const ending = finalDate.value;

        const daysLeft = leftDates(initial);
        const daysIn = betweenDates(initial,ending);

        

        cleanValue();

        return {
            cityName,
            daysLeft,
            daysIn
        }
    }
}

const cleanValue = () =>{
    city.value='';
    startDate.value='';
    finalDate.value='';
}
