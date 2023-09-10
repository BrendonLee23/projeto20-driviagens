import travelsService from "../services/travelsService";

export async function postTravels(req, res, next) {
    const { passengerId, flightId } = req.body;

    try {
        await travelsService.insertTravels(passengerId, flightId)
        res.sendStatus(201);
    } catch (error) {
        next(error);
    }
}
