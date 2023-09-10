import { conflictError } from "../errors/errors.js";
import citiesRepository from "../repositories/cities.repository.js";

export async function postCities(name) {

        const cityExists = await citiesRepository.verifyCity(name);
        // Verifique se a cidade já existe na tabela de cidades
        if (cityExists.rowCount > 0) throw conflictError()
        // Adicione a cidade ao array
        await citiesRepository.insertCity(name);
}

const citiesService = {

    postCities

}

export default citiesService;