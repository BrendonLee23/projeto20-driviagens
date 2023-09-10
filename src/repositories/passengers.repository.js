import { db } from "../database/database.connection.js";

async function verifyPassengerExistence(passengerId) {
    const passenger = await db.query(`SELECT * FROM passengers WHERE id=$1`, [passengerId]);
    return passenger;
}

async function insertPassenger (firstName, lastName) {
	await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)`, [firstName, lastName]);
}

async function findPassengersWithTravels (name, params, maxResults) {

        // Consulta SQL para buscar passageiros e suas quantidades de viagens
        let query = `
        SELECT
            CONCAT(passengers."firstName", ' ', passengers."lastName") AS passenger,
            COUNT(travels.id) AS travels
        FROM
            passengers
        LEFT JOIN
            travels ON passengers.id = travels."passengerId"
    `;    
        if (name) {
            query += ' WHERE CONCAT(passengers."firstName", \' \', passengers."lastName") ILIKE $1';
            params.push(`%${name}%`);
        }

        query += `
            GROUP BY passengers.id, passengers."firstName", passengers."lastName"
            ORDER BY travels DESC
        `;

        // Limite de resultados
        if (name) {
            query += ' LIMIT $2';
            params.push(maxResults);
        } else {
            query += ' LIMIT $1';
            params.push(maxResults);
        }

        const result = await db.query(query, params);
        return result
}

const passengersRepository = {

    verifyPassengerExistence,
    insertPassenger,
    findPassengersWithTravels

};

export default passengersRepository;
