
export const getImage = async (city,country) => {
    const response = await fetch('http://localhost:8000/piximg',{
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type' : 'application/json',
            // 'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            'city':city
        })
    })
    try{
        const data = await response.json();

        const img = data.hits[0].webformatURL;
        return img

    }catch(error){
        console.log("error",error)
    }
}