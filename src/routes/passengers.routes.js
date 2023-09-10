import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import passengerSchema from "../schemas/passenger.schema.js";
import { getPassengersWithTravels, postPassengers } from "../controllers/passengers.controllers.js";

const passengersRouter = Router();

passengersRouter.post("/passengers", validateSchema(passengerSchema), postPassengers);
passengersRouter.get("/passengers/travels", getPassengersWithTravels);

export default passengersRouter;