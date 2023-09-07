export async function postPassengers(req, res) {
    const { firstName, lastName } = req.body;

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

        // Se ambos os campos estiverem corretos, retorna status 201 (Created)
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}


