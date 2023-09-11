export function formatedDate(date){
    const dateParts = date.split('-');
    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // Mês começa em 0 (janeiro)
    const year = parseInt(dateParts[2], 10);
    const flightDate = new Date(year, month, day);
    return flightDate;
}