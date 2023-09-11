import { internalServerError } from "../errors/errors.js";
import passengersRepository from "../repositories/passengers.repository.js";

async function insertPassenger( firstName, lastName) {

        await passengersRepository.insertPassenger(firstName, lastName)
}
async function getPassengersWithTravels(name, params) {

            // Verificar se a quantidade de resultados ultrapassa 10
            const maxResults = 10;


            const result = await passengersRepository.findPassengersWithTravels(name, params, maxResults);
            if (result.rowCount > maxResults) throw internalServerError("Limite de resultados ultrapassado.")
            const passengersWithTravels = result.rows.map(row => ({
                passenger: row.passenger,
                travels: Number(row.travels),
            }));
            return (passengersWithTravels);
}


const passengersService = {

    insertPassenger,
    getPassengersWithTravels

}

export default passengersService;
