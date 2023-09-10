import httpStatus from "http-status";
import passengersService from "../services/passengersService.js";


export async function postPassengers(req, res) {
    const { firstName, lastName } = req.body;

            await passengersService.insertPassenger(firstName, lastName)
            res.sendStatus(201);
    }


export async function getPassengersWithTravels(req, res, next) {

    const { name } = req.query;
    const params = [];
            const result = await passengersService.getPassengersWithTravels(name, params);
            // Formatar o resultado
            const passengersWithTravels = result.rows.map(row => ({
                passenger: row.passenger,
                travels: row.travels,
            }));
            res.send(passengersWithTravels);
}
