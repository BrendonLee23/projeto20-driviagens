import citiesService from "../services/citiesService.js";


export async function postCities(req, res) {
    const { name } = req.body;

    try {
        await citiesService.postCities(name)
        // Se tudo estiver correto, retorna status 201 (Created)
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}
