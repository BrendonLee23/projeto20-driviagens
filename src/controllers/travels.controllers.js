import travelsService from "../services/travelsService";

export async function postTravels(req, res) {
    const { passengerId, flightId } = req.body;

    try {
        await travelsService.insertTravels(passengerId, flightId)

        // Se todas as validações passarem, retorna status 201 (Created)
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}
