import { db } from "../database/database.connection.js";


async function insertTravel (passengerId, flightId) {
	await db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2)`, [passengerId, flightId]);
}

const travelsRepository = {

    insertTravel

};

export default travelsRepository;
