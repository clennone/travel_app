export const getCountry = async (code) =>{
    const response = await fetch(`http://restcountries.eu/rest/v2/alpha/${code}`);
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
            <p><span>Name of the City:</span> ${city.name}</p>
            <p><span>Capital:</span> ${city.capital}</p>
            <p><span>Currency:</span> ${city.currency}</p>
            <p><span>Population:</span> ${city.population}</p>
            <p><span>Region:</span> ${city.region}</p>
            <p><span>Subregion:</span> ${city.subregion}</p>`;
            
            return text;
}