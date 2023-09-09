import travelsRepository from "../repositories/travels.repository.js";

async function insertTravels(passengerId, flightId) {

        const existPassenger = await travelsRepository.verifyPassengerExistence(passengerId);
        const existFlight = await travelsRepository.verifyFlightExistence(flightId);

        if (!existPassenger || !existFlight) {
            res.status(404).json({ error: 'IDs de passageiro e/ou voo não encontrados.' });
            return;
        }
}

const travelsService = {

    insertTravels

}

export default travelsService;