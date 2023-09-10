import { db } from "../database/database.connection.js";



async function verifyCity(name) {
	return db.query(`SELECT * FROM cities WHERE name=$1`, [name])
}
async function insertCity (name) {
	return db.query(`INSERT INTO cities (name) VALUES ($1)`, [name]);
}
async function verifyOriginCity(origin) {
	const city = await db.query(`SELECT * FROM cities WHERE name=$1`, [origin])
    return city;
}
async function verifyDestinationCity(destination) {
	const destiny = await db.query(`SELECT * FROM cities WHERE name=$1`, [destination])
    return destiny
}
const citiesRepository = {

    verifyCity,
    insertCity,
    verifyOriginCity,
    verifyDestinationCity

};

export default citiesRepository;