import httpStatus from "http-status";
import travelsService from "../services/travelsService.js";

export async function postTravels(req, res) {
    const { passengerId, flightId } = req.body;

        await travelsService.insertTravels(passengerId, flightId)
        res.sendStatus(httpStatus.CREATED);
}
