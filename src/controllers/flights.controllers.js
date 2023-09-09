import flightsRepository from "../repositories/flights.repository.js";



export async function postFlights(req, res) {
    const { origin, destination, date } = req.body;

    try {
        // Verificando se as cidades de origem e destino existem na lista de cidades
        const existOrigin = await flightsRepository.verifyOriginCity(origin);
        const existDestination = await flightsRepository.verifyDestinationCity(destination);

        if (!existOrigin || !existDestination) {
            res.status(404).json({ error: 'Cidades de origem e/ou destino não encontradas.' });
            return;
        }
        // Verificando se origem e destino são diferentes
        if (origin === destination) {
            res.status(409).json({ error: 'Origem e destino devem ser diferentes.' });
            return;
        }
        // Converta a data para um objeto Date
        const dateParts = date.split('-');
        const day = parseInt(dateParts[0], 10);
        const month = parseInt(dateParts[1], 10) - 1; // Mês começa em 0 (janeiro)
        const year = parseInt(dateParts[2], 10);
        const flightDate = new Date(year, month, day);
        // Verificando se a data do voo é maior do que a data atual
        const currentDate = new Date();
        if (flightDate <= currentDate) {
            res.status(422).json({ error: 'A data do voo deve ser maior do que a data atual.' });
            return;
        }
        await flightsRepository.insertFlight( origin, destination, flightDate)
        // Se todas as validações passarem, retorna status 201 (Created)
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}
