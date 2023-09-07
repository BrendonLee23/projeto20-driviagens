import joi from "joi";

const citySchema = joi.object({
    name: joi.string().trim().min(1).required(),
});

export default citySchema;
