import passengersRepository from "../repositories/passengers.repository.js";

async function insertPassenger( firstName, lastName) {

        await passengersRepository.insertPassenger(firstName, lastName)
}
async function getPassengersWithTravels(name, params) {

            // Verificar se a quantidade de resultados ultrapassa 10
            const maxResults = 10;
            if (name && name.length > maxResults) {
                res.status(500).send('Too many results');
                return;
            }
            const result = await passengersRepository.findPassengersWithTravels(name, params, maxResults);
    
            return (result);
}


const passengersService = {

    insertPassenger,
    getPassengersWithTravels

}

export default passengersService;
