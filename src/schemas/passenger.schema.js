import joi from "joi";

const passengerSchema = joi.object({
    firstName: joi.string().trim().min(1).max(100).required(),
    lastName: joi.string().trim().min(1).max(100).required(),
});

export default passengerSchema;
