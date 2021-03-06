const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


const geoAPI = 'http://api.geonames.org/searchJSON?q=';
const geoUser = process.env.API_USER;

const apiKey = process.env.API_KEY;
const weatherBit = `http://api.weatherbit.io/v2.0/current?key=${apiKey}`;

const pixKey = process.env.PIX_KEY;
const apiPix = `https://pixabay.com/api/?key=${pixKey}`;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(express.static('dist'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`APP Travel start on server ${PORT}`));

app.get('/', (req, res) => {
    res.sendFile(path.resolve("dist/index.html"));
})


//POST AND FETCH ROUTES

app.post('/geoname', async(req,res)=>{
    const text = req.body.city;
    const rows = 'maxRows=1'
    await fetch(`${geoAPI}${text}&${rows}&username=${geoUser}`)
        .then(response => response.json())
        .then(data => res.send(data))
        .catch(err => console.log(err,'error'));
})

app.post('/weather', async(req,res)=>{
    const lat = req.body.geoLat;
          lon = req.body.geoLng;
    await fetch(`${weatherBit}&lat=${lat}&lon=${lon}`)
        .then(response => response.json())
        .then(data => res.send(data))
        .catch(err => console.log(err,'error'));
})

app.post('/piximg', async(req,res)=>{
    const city = req.body.city;
    await fetch(`${apiPix}&q=${city}&image_type=photo&category=city&orientation=horizontal`)
        .then(response => response.json())
        .then(data => res.send(data))
        .catch(err => console.log(err,'error'));
})


