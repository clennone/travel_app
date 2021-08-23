import { validateDates } from "./validateDates";

const city = document.getElementById('destiny');
const startDate = document.getElementById('start_date');
const finalDate = document.getElementById('final_date');


export const validateValue = () =>{
    if (city.value==='' || startDate.value.length===0 || finalDate.value.length===0){ 
        alert('You must enter all the fields');
    } else{
        const cityName = city.value;
        const initial = startDate.value;
        const ending = finalDate.value;

        console.log(validateDates(initial,ending));

        cleanValue();
    }
}

const cleanValue = () =>{
    city.value='';
    startDate.value='';
    finalDate.value='';
}
