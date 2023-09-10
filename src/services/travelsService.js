import { notFoundError } from "../errors/errors.js";
import flightsRepository from "../repositories/flights.repository.js";
import passengersRepository from "../repositories/passengers.repository.js";
import travelsRepository from "../repositories/travels.repository.js";

async function insertTravels(passengerId, flightId) {

        const existPassenger = await passengersRepository.verifyPassengerExistence(passengerId);
        const existFlight = await flightsRepository.verifyFlightExistence(flightId);

        if (existPassenger.rowCount === 0 || existFlight.rowCount === 0) throw notFoundError("O id do passageiro e do voo devem ser ids existentes")
        
        await travelsRepository.insertTravel(passengerId, flightId)
}

const travelsService = {

    insertTravels

}

export default travelsService;