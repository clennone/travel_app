export const getGeo =  async(city) => {
    
    const response = await fetch ('http://localhost:8000/geoname', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({"city": city}),
    })
    try{
        const newData = await response.json();
        
        //variables for body request
        const geoCode = newData.geonames[0].countryCode;
        const geoName = newData.geonames[0].name;
        const geoCountry= newData.geonames[0].countryName;
        const geoLat= newData.geonames[0].lat;
        const geoLng= newData.geonames[0].lng;

        return {geoName, geoCountry, geoLat, geoLng, geoCode}

    }catch(err){
        console.log('ERROR',err);
    }

}