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
            Name of the City: ${city.name}
            Capital: ${city.capital}
            Currency; ${city.currency}
            Population: ${city.population}
            Region: ${city.region}
            Subregion: ${city.subregion}`;
            
            return text;
}