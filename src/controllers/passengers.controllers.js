import httpStatus from "http-status";
import passengersService from "../services/passengersService.js";


export async function postPassengers(req, res) {
    const { firstName, lastName } = req.body;

            await passengersService.insertPassenger(firstName, lastName)
            res.sendStatus(httpStatus.CREATED);
    }


export async function getPassengersWithTravels(req, res) {

    const { name } = req.query;
    const params = [];
            const result = await passengersService.getPassengersWithTravels(name, params);
            // Formatar o resultado
            res.send(result);
}
