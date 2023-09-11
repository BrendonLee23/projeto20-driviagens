import { Router } from "express";
import { getFlights, postFlights } from "../controllers/flights.controllers.js";
import { flightSchema } from "../schemas/flight.schema.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { validateQuery } from "../middlewares/validateQuery.middleware.js";
import { querySchema } from "../schemas/query.schema.js";

const flightsRouter = Router();

flightsRouter.post("/flights",validateSchema(flightSchema), postFlights);
flightsRouter.get("/flights",validateQuery(querySchema), getFlights);

export default flightsRouter;