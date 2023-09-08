import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { citySchema } from "../schemas/city.schema.js";
import { postCities } from "../controllers/cities.controllers.js";

const citiesRouter = Router();

citiesRouter.post("/cities", validateSchema(citySchema), postCities);

export default citiesRouter;