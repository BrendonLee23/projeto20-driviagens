


async function getFlights(origin, destination, biggerDate, smallerDate) {
    const params = [];
    let flights;

    // Consulta SQL para buscar voos com base nas consultas da URL
    if (origin) {
        flights = await getFlightsByOrigin(origin, params);
    } 
    else if (destination) {
        flights = await getFlightsByDestination(destination, params);
    } 
    else if (biggerDate && smallerDate) {
        flights = await getFlightsByDateRange(biggerDate, smallerDate, params);
    }
    // Retorna os voos como resposta em formato JSON
    return flights;
}

const flightsServices = {
    getFlights
};

export default flightsServices;

