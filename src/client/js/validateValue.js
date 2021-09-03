import { betweenDates, leftDates } from "./validateDates";

const cityName = document.getElementById('city');
const startDate = document.getElementById('start_date');
const finalDate = document.getElementById('final_date');


export const returnValues =  () =>{
    const city = cityName.value;
    const initial = startDate.value;
    const ending = finalDate.value;
    const daysLeft = leftDates(initial);
    const daysBetween = betweenDates(initial,ending);

    return {
        city,
        initial,
        ending,
        daysLeft,
        daysBetween
    }
}

export const cleanValue = () =>{
    city.value='';
    startDate.value='';
    finalDate.value='';
}

export const cleanFinaldate = () => {
    finalDate.value='';
}
