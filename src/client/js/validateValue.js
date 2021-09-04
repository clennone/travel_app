import { betweenDates, leftDates } from "./validateDates";


export const returnValues =  () =>{

    const cityName = document.getElementById('city');
    const startDate = document.getElementById('start_date');
    const finalDate = document.getElementById('final_date');

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
    const cityName = document.getElementById('city');
    const startDate = document.getElementById('start_date');
    const finalDate = document.getElementById('final_date');
    cityName.value='';
    startDate.value='';
    finalDate.value='';
}

export const cleanFinaldate = () => {
    const finalDate = document.getElementById('final_date');
    finalDate.value='';
}
