import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import passengerSchema from "../schemas/passenger.schema.js";
import { postPassengers } from "../controllers/passengers.controllers.js";

const passengersRouter = Router();

passengersRouter.post("/passengers", validateSchema(passengerSchema), postPassengers);
passengersRouter.get("/passengers/travels", );

export default passengersRouter;