import citiesService from "../services/citiesService.js";


export async function postCities(req, res, next) {
    const { name } = req.body;

    try {
        await citiesService.postCities(name)
        res.sendStatus(201);
    } catch (error) {
        next(error);
    }
}
