import citiesRepository from "../repositories/cities.repository.js";
import flightsRepository from "../repositories/flights.repository.js";
import flightsServices from "../services/flightsService.js";



export async function postFlights(req, res, next) {
    const { origin, destination, date } = req.body;

    try {
        await flightsServices.postFlights(origin, destination, date)
    } catch (error) {
        next(error);
    }
}

export async function getFlights(req, res, next) {
const { origin, destination, 'bigger-date': biggerDate, 'smaller-date': smallerDate } = req.query;

    try {
        const flights = await flightsServices.getFlights(origin, destination, biggerDate, smallerDate);

        res.send(flights);
    } catch (error) {
        next(error);
    }
}

