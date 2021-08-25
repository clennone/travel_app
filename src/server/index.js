const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 8000;

const geoAPI = 'http://api.geonames.org/searchJSON?q=';
const geoUser = process.env.API_USER;

console.log(geoUser);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(express.static('dist'));

app.listen(PORT, () => console.log(`APP Travel on server ${PORT}`));

app.get('/', (req, res) => {
    res.sendFile(path.resolve("dist/index.html"));
})

app.post('/geoname', async(req,res)=>{
    const text = req.body.city;
    const rows = 'maxRows=1'

    console.log(req.body);
    console.log(text);

    await fetch(`${geoAPI}${text}&${rows}&username=${geoUser}`)
        .then(response => response.json())
        .then(data => res.send(data))
        // .catch(err => console.log(err,'error'));
})



  


