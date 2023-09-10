import httpStatus from "http-status";
import flightsServices from "../services/flightsService.js";



export async function postFlights(req, res) {
        const { origin, destination, date } = req.body;

        await flightsServices.postFlights(origin, destination, date)
        res.sendStatus(httpStatus.CREATED);
}

export async function getFlights(req, res) {
const { origin, destination, 'bigger-date': biggerDate, 'smaller-date': smallerDate } = req.query;

        const flights = await flightsServices.getFlights(origin, destination, biggerDate, smallerDate);
        
        res.send(flights);
}

