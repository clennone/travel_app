// get value 
import { validateValue } from "./validateValue";


const btnSubmit = document.getElementById('btn_submit');


function getIt() {
    btnSubmit.addEventListener('click',function(e){
        e.preventDefault();
        
        let city = document.getElementById('city').value;
        
        fetch ('http://localhost:8000/geoname', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({"city": city}),
        })
        .then(res => res.json())
        .then(res => console.log(res))
        // .catch(error => console.log(error,'error'))

    })
}


export {getIt}