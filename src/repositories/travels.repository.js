import { db } from "../database/database.connection.js";

async function verifyPassengerExistence(passengerId) {
	const passenger = await db.query(`SELECT * FROM travels WHERE name=$1`, [passengerId])
    return passenger;
}
async function verifyFlightExistence(flightId) {
	const flight = await  db.query(`SELECT * FROM travels WHERE name=$1`, [flightId])
    return flight;
}
async function insertTravel (passengerId, flightId) {
	await db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2)`, [passengerId, flightId]);
}

const travelsRepository = {

    verifyFlightExistence,
    verifyPassengerExistence,
    insertTravel

};

export default travelsRepository;