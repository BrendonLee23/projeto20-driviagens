import joi from "joi";

export const querySchema = joi.object({
    origin: joi.string(),
    destination: joi.string(),
    "smaller-date": joi.string().pattern(/^\d{2}-\d{2}-\d{4}$/),
    "bigger-date": joi.string().pattern(/^\d{2}-\d{2}-\d{4}$/),
    name: joi.string()
});