import passengersRepository from "../repositories/passengers.repository.js";

export async function insertPassenger( firstName, lastName) {

        await passengersRepository.insertPassenger(firstName, lastName)
}

const passengersService = {

    insertPassenger

}

export default passengersService;