import passengersService from "../services/passengersService";


export async function postPassengers(req, res) {
    const { firstName, lastName } = req.body;

    try {

        const passenger = await passengersService.createPassengers(firstName, lastName)
        res.send(passenger);
        
        /* res.sendStatus(201); */
    } catch (err) {
        res.status(500).send(err.message);
    }
}


