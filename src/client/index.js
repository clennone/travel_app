import { catchInfo } from './js/app'

import './styles/normalize.scss'
import './styles/_base.scss'
import './styles/_body.scss'
import './styles/_footer.scss'
import './styles/_form.scss'
import './styles/_header.scss'
import './styles/_card.scss'

document.addEventListener('DOMContentLoaded', () => {
    const btnSubmit = document.getElementById('btn_submit');

    btnSubmit.addEventListener('click', function(e){
        e.preventDefault();
        catchInfo();
    });
});


export{
    catchInfo
}