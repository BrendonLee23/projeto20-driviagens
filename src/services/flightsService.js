import { badRequestError, conflictError, notFoundError, unprocessableEntityError } from "../errors/errors.js";
import citiesRepository from "../repositories/cities.repository.js";
import flightsRepository from "../repositories/flights.repository.js";
import { formatedDate } from "../utils/date.utils.js";

async function postFlights(origin, destination, date) {

        // Verificando se as cidades de origem e destino existem na lista de cidades

        if (origin === destination) throw conflictError("Origem e destino devem ser diferentes")

        const existOrigin = await citiesRepository.verifyOriginCity(origin);
        const existDestination = await citiesRepository.verifyDestinationCity(destination);
        console.log(existOrigin)
        console.log(existDestination)
        if (existOrigin.rowCount === 0 || existDestination.rowCount === 0) throw notFoundError("A cidades de origem e destino não foram encontradas")

        const flightDate = formatedDate(date);
        // Verificando se a data do voo é maior do que a data atual
        const currentDate = new Date();
        if (flightDate <= currentDate) throw unprocessableEntityError("A data do voo deve ser maior do que a data atual")
        await flightsRepository.insertFlight( origin, destination, flightDate)
}

async function getFlights(origin, destination, biggerDate, smallerDate) {

    let newBiggerDate;
    let newSmallerDate;

    const params = [];
    console.log(smallerDate, biggerDate)
    if((smallerDate && !biggerDate) || (!smallerDate && biggerDate)) {
        throw badRequestError("bigger-date e smaller-date devem ser passadas juntas.");
    }
    if(smallerDate && biggerDate) {
        newSmallerDate = formatedDate(smallerDate)
        newBiggerDate = formatedDate(biggerDate)
        if (newSmallerDate > newBiggerDate) throw unprocessableEntityError("bigger-date não pode ser menor que smaller-date.")
    }
    let flights;
    
    flights = await flightsRepository.getAllInfos()

    if (origin) {
        flights = await flightsRepository.getFlightsByOrigin(origin, params);
    } 
    else if (destination) {
        flights = await flightsRepository.getFlightsByDestination(destination, params);
    } 
    
    else if (smallerDate && biggerDate) {
        flights = await flightsRepository.getFlightsByDateRange(newSmallerDate, newBiggerDate, params);
    } 

    return (flights.rows);
}

const flightsServices = {

    postFlights,
    getFlights
    
};

export default flightsServices;

