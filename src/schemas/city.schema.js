import joi from "joi";

export const citySchema = joi.object({
    name: joi.string().trim().min(2).max(50).required(),
});


