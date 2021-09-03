export const getCountry = async (code) =>{
    const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
            const data = await response.json();

            const city = {
                name : data.altSpellings[1],
                capital : data.capital,
                currency : data.currencies[0].name,
                population: data.population,
                region: data.region,
                subregion: data.subregion
            } ;

            const text = `
            <p>Name of the City: ${city.name}</p>
            <p>Capital: ${city.capital}</p>
            <p>Currency; ${city.currency}</p>
            <p>Population: ${city.population}</p>
            <p>Region: ${city.region}</p>
            <p>Subregion: ${city.subregion}</p>`;
            
            return text;
}