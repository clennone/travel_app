export const getWeather = async (data) =>{
    const response = await fetch('https://localhost:8000/weather',{
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            },
            body: JSON.stringify(data)
        });
        try{
            const allWeather = await response.json();
            return allWeather
            
        } catch(err){
            console.log('ERROR',err)
        }
}