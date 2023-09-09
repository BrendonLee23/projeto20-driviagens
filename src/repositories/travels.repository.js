import { db } from "../database/database.connection.js";

async function verifyPassengerExistence(passengerId) {
	const passenger = await db.query(`SELECT * FROM travels WHERE name=$1`, [passengerId])
    return passenger;
}
async function verifyFlightExistence(flightId) {
	const flight = await  db.query(`SELECT * FROM travels WHERE name=$1`, [flightId])
    return flight;
}

const travelsRepository = {

    verifyFlightExistence,
    verifyPassengerExistence

};

export default travelsRepository;