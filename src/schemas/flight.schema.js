import joi from "joi";

const flightSchema = joi.object({
    origin: joi.number().integer().min(1).required(),
    destination: joi.number().integer().min(1).required(),
    date: joi.date().iso().required(),
});

export default flightSchema;
