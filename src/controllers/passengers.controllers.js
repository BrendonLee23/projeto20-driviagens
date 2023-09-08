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


