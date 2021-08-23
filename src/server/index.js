const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(express.static('dist'));

app.listen(PORT, () => console.log(`APP Travel on server ${PORT}`));

app.get('/', (req,res)=>{
    res.sendFile(path.re)
})


