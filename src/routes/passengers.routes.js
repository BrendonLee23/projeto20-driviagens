import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import passengerSchema from "../schemas/passenger.schema.js";
import { getPassengersWithTravels, postPassengers } from "../controllers/passengers.controllers.js";
import { validateQuery } from "../middlewares/validateQuery.middleware.js";
import { querySchema } from "../schemas/query.schema.js";

const passengersRouter = Router();

passengersRouter.post("/passengers", validateSchema(passengerSchema), postPassengers);
passengersRouter.get("/passengers/travels",validateQuery(querySchema), getPassengersWithTravels);

export default passengersRouter;