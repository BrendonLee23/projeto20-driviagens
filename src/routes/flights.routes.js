import { Router } from "express";
import { postFlights } from "../controllers/flights.controllers.js";
import { flightSchema } from "../schemas/flight.schema.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";

const flightsRouter = Router();

flightsRouter.post("/flights",validateSchema(flightSchema), postFlights);
flightsRouter.get("/flights", );

export default flightsRouter;