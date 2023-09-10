import httpStatus from "http-status";
import passengersService from "../services/passengersService.js";


export async function postPassengers(req, res) {
    const { firstName, lastName } = req.body;

        try {
            await passengersService.insertPassenger(firstName, lastName)
            res.sendStatus(201);
        } catch (error) {
            console.log(error);
            res.status(500).send(error.message);
        }
    }


export async function getPassengersWithTravels(req, res) {
        try {
            const { name } = req.query;
    
            // Verificar se a quantidade de resultados ultrapassa 10
            const maxResults = 10;
            if (name && name.length > maxResults) {
                res.status(500).send('Too many results');
                return;
            }
    
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
    
            const params = [];
    
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
    
            // Formatar o resultado
            const passengersWithTravels = result.rows.map(row => ({
                passenger: row.passenger,
                travels: row.travels,
            }));
    
            res.json(passengersWithTravels);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    