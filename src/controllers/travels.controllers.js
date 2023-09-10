import travelsService from "../services/travelsService";

export async function postTravels(req, res, next) {
    const { passengerId, flightId } = req.body;

        await travelsService.insertTravels(passengerId, flightId)
        res.sendStatus(201);
}
