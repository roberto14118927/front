/**
 * Formatea una fecha de objeto { year : 2018, month: 06, day: 22 } a 2018-06-22
 * @param date 
 */
function formattedDate(date:any) {
    let year = String(date.year);
    let month = String(date.month);
    let day = String(date.day);

    return `${year}-${month}-${day}`;
}

/**
 * Transforma una fecha 2018-06-22 en un objeto { year : 2018, month: 06, day: 22 }
 * @param date 
 */
function converterDate(date:string){
    let now = new Date(date);

    date = now.toISOString().slice(0,10).replace(/-/g,"");

    return {
        year: parseInt(date.slice(0,4)),
        month: parseInt(date.slice(4,6)),
        day: parseInt(date.slice(6,8))
    };
}

export {
    converterDate,
    formattedDate
} 