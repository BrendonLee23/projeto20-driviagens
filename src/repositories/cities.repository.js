import { db } from "../database/database.connection.js";



async function verifyCity(name) {
	return db.query(`SELECT * FROM cities WHERE name=$1`, [name])
}
async function insertCity (name) {
	return db.query(`INSERT INTO cities (name) VALUES ($1)`, [name]);
}

const citiesRepository = {

    verifyCity,
    insertCity

};

export default citiesRepository;