import { db } from "../database/database.connection.js";

async function insertPassenger (firstName, lastName) {
	return db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)`, [firstName, lastName]);
}

async function findPassengers () {
	return // depois faço
}

const passengersRepository = {

    insertPassenger,
    findPassengers

};

export default passengersRepository;
