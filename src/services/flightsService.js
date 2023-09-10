import { badRequestError, conflictError, unprocessableEntityError } from "../errors/errors";
import citiesRepository from "../repositories/cities.repository";
import flightsRepository from "../repositories/flights.repository";

async function postFlights(origin, destination, date) {

        // Verificando se as cidades de origem e destino existem na lista de cidades
        const existOrigin = await citiesRepository.verifyOriginCity(origin);
        const existDestination = await citiesRepository.verifyDestinationCity(destination);

        if (!existOrigin || !existDestination) throw notFoundError("A cidades de origem e destino não foram encontradas") 
        if (origin === destination) throw conflictError("Origem e destino devem ser diferentes")

        // Converta a data para um objeto Date
        const dateParts = date.split('-');
        const day = parseInt(dateParts[0], 10);
        const month = parseInt(dateParts[1], 10) - 1; // Mês começa em 0 (janeiro)
        const year = parseInt(dateParts[2], 10);
        const flightDate = new Date(year, month, day);
        // Verificando se a data do voo é maior do que a data atual
        const currentDate = new Date();
        if (flightDate <= currentDate) throw unprocessableEntityErrr("A data do voo deve ser maior do que a data atual")
        await flightsRepository.insertFlight( origin, destination, flightDate)
}

async function getFlights(origin, destination, biggerDate, smallerDate) {

    const params = [];
    
    if ((smallerDate && biggerDate) && smallerDate > biggerDate) throw unprocessableEntityError("bigger-date não pode ser menor que smaller-date.")

    let flights;

    if (origin) {
        flights = await flightsRepository.getFlightsByOrigin(origin, params);
    } 
    else if (destination) {
        flights = await flightsRepository.getFlightsByDestination(destination, params);
    } 
    else if (smallerDate && biggerDate) {
        flights = await flightsRepository.getFlightsByDateRange(biggerDate, smallerDate, params);
    } else {
        throw badRequestError("bigger-date e smaller-date devem ser passadas juntas.");
    }

    return flights;
}

const flightsServices = {

    postFlights,
    getFlights
    
};

export default flightsServices;

