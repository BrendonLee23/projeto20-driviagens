import citiesService from "../services/citiesService.js";


export async function postCities(req, res, next) {
    const { name } = req.body;

        await citiesService.postCities(name)
        res.sendStatus(201);

}
