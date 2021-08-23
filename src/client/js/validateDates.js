export const getDates = (value) => {
    const year = value.substr(0,4)
    const month = value.substr(5,2);
    const day = value.substr(8,2);
    
    return {
        day,
        month,
        year
    }
}

export const leftDates = (a) =>{
    let today = new Date();
    const myDate = today.toISOString().substr(0,10);

    const date1= new Date(a).getTime();
    const date2= new Date(myDate).getTime();

    const transDays = Math.round((Math.abs(date1-date2))/(24*60*60*1000));

    return transDays;
}

export const betweenDates = (a,b) => {
    const date1= new Date(a).getTime();
    const date2= new Date(b).getTime();
    const transDays = Math.round((Math.abs(date2-date1))/(24*60*60*1000));

    return transDays;
}