import citiesRepository from "../repositories/cities.repository.js";

export async function postCities(name) {

        const cityExists = await citiesRepository.verifyCity(name);
        // Verifique se a cidade já existe na tabela de cidades
        if (cityExists.rowCount > 0) {
            /* res.status(409).json({ error: 'A cidade já existe.' }); */
            return null;
        }
        // Adicione a cidade ao array
        await citiesRepository.insertCity(name);
}

const citiesService = {

    postCities

}

export default citiesService;