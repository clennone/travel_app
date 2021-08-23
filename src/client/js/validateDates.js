const getDates = (value) => {
    const year = value.substr(0,4)
    const month = value.substr(5,2);
    const day = value.substr(8,2);
    
    return {
        year,
        month,
        day
    }
}


export const validateDates = (a,b) =>{
    let today = new Date();

    const myDate = today.toISOString().substr(0,10);

    return getDates(a,b);


}

