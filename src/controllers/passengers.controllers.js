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


export async function getPassengersWithTravels(req, res, next) {

    const { name } = req.query;
    const params = [];
    
    try {
            const result = await passengersService.getPassengersWithTravels(name, params);
    
            // Formatar o resultado
            const passengersWithTravels = result.rows.map(row => ({
                passenger: row.passenger,
                travels: row.travels,
            }));
    
            res.send(passengersWithTravels);
        } catch (error) {
            next(error);
        }
}
