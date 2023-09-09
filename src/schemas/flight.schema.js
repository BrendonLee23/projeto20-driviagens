import joi from "joi";

export const flightSchema = joi.object({
    origin: joi.number().integer().positive().required(),
    destination: joi.number().integer().positive().required(),
    date: joi.string().pattern(/^\d{2}-\d{2}-\d{4}$/).required(),
});


