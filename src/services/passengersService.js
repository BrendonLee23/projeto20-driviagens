import passengersRepository from "../repositories/passengers.repository";

export async function createPassengers(firstName, lastName) {


    try {
        // Validação para firstName

        if (firstName.length < 2 || firstName.length > 100) {
            res.status(400).json({ error: 'O campo firstName é obrigatório e deve ter entre 2 e 100 caracteres.' });
            return;
        }

        // Validação para lastName

        if (lastName.length < 2 || lastName.length > 100) {
            res.status(400).json({ error: 'O campo lastName é obrigatório e deve ter entre 2 e 100 caracteres.' });
            return;
        }

        await passengersRepository.insertPassenger(firstName, lastName)

        // Se ambos os campos estiverem corretos, retorna status 201 (Created)
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const passengersService = {

    createPassengers

}

export default passengersService;