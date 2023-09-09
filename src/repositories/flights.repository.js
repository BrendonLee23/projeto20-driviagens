import { db } from "../database/database.connection.js";


async function verifyOriginCity(origin) {
	const city = await db.query(`SELECT * FROM cities WHERE name=$1`, [origin])
    return city;
}
async function verifyDestinationCity(destination) {
	const destiny = await  db.query(`SELECT * FROM cities WHERE name=$1`, [destination])
    return destiny
}
async function insertFlight(origin, destination, flightDate) {
	await db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3)`, [origin, destination, flightDate]);
}


const flightsRepository = {

    verifyDestinationCity,
    verifyOriginCity,
    insertFlight

};

export default flightsRepository;