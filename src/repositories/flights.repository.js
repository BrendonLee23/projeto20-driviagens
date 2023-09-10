import { db } from "../database/database.connection.js";



async function insertFlight(origin, destination, flightDate) {
	await db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3)`, [origin, destination, flightDate]);
}
async function verifyFlightExistence(flightId) {
    const flight = await db.query(`SELECT * FROM flights WHERE id=$1`, [flightId]);
    return flight;
}
async function getFlightsByOrigin(origin, params) {
    let query = `
        SELECT
            flights.id,
            cities_origin.name AS origin,
            cities_destination.name AS destination,
            TO_CHAR(flights.date, 'DD-MM-YYYY') AS date
        FROM
            flights
        INNER JOIN
            cities AS cities_origin ON flights.origin = cities_origin.id
        INNER JOIN
            cities AS cities_destination ON flights.destination = cities_destination.id
    `;

    if (origin) {
        query += ' WHERE cities_origin.name = $1';
        params.push(origin);
    }
    // Adiciona a cláusula SQL para ordenar os resultados por datas, da mais próxima para a mais distante
    query += ' ORDER BY flights.date';

    const result = await db.query(query, params);
    return result;
}
async function getFlightsByDestination(destination, params) {
    let query = `
        SELECT
            flights.id,
            cities_origin.name AS origin,
            cities_destination.name AS destination,
            TO_CHAR(flights.date, 'DD-MM-YYYY') AS date
        FROM
            flights
        INNER JOIN
            cities AS cities_origin ON flights.origin = cities_origin.id
        INNER JOIN
            cities AS cities_destination ON flights.destination = cities_destination.id
    `;

    if (destination) {
        query += params.length ? ' AND' : ' WHERE';
        query += ' cities_destination.name = $' + (params.length + 1);
        params.push(destination);
    }
    // Adiciona a cláusula SQL para ordenar os resultados por datas, da mais próxima para a mais distante
    query += ' ORDER BY flights.date';

    const result = await db.query(query, params);
    return result;
}
async function getFlightsByDateRange(smallerDate, biggerDate, params) {
    let query = `
        SELECT
            flights.id,
            cities_origin.name AS origin,
            cities_destination.name AS destination,
            TO_CHAR(flights.date, 'DD-MM-YYYY') AS date
        FROM
            flights
        INNER JOIN
            cities AS cities_origin ON flights.origin = cities_origin.id
        INNER JOIN
            cities AS cities_destination ON flights.destination = cities_destination.id
    `;
    query += ' WHERE flights.date >= $1 AND flights.date <= $2';
    params.push(smallerDate, biggerDate);

    // Adiciona a cláusula SQL para ordenar os resultados por datas, da mais próxima para a mais distante
    query += ' ORDER BY flights.date';

    const result = await db.query(query, params);
    return result;
}



const flightsRepository = {

    insertFlight,
    verifyFlightExistence,
    getFlightsByOrigin,
    getFlightsByDestination,
    getFlightsByDateRange

};

export default flightsRepository;