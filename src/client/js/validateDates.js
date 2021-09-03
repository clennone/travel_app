// get text of date
export const getDate = (value) => {
    const year = value.substr(0,4)
    const month = value.substr(5,2);
    const day = value.substr(8,2);
    const date = `${month}/${day}/${year}`;   
    return date
}

// confirm if values are complete
export const validateDates = (a,b,c) => {
    if (a === '' || b.length === 0 || c.length === 0){
        return true;
    } else {
        return false;
    }
}

// confirm how many days are left
export const errorDates = (x,y) => {
    const a = new Date(x).getTime();
    const b = new Date(y).getTime();

    if (b < a){
        return true;
    } 
}

//return left days between today and date
export const leftDates = (a) =>{
    let today = new Date();
    const myDate = today.toISOString().substr(0,10);

    const date1= new Date(a).getTime();
    const date2= new Date(myDate).getTime();

    const transDays = Math.round((Math.abs(date1-date2))/(24*60*60*1000));

    return transDays;
}

// return the dates between start and ending day
export const betweenDates = (a,b) => {
    const date1= new Date(a).getTime();
    const date2= new Date(b).getTime();
    const transDays = Math.round((Math.abs(date2-date1))/(24*60*60*1000));

    return transDays;
}

