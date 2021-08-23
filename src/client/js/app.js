// get value 
import { validateValue } from "./validateValue";


const btnSubmit = document.getElementById('btn_submit');
    function getIt() {
        btnSubmit.addEventListener('click',function(e){
            e.preventDefault();
            
            validateValue();

        })
}


export {getIt}