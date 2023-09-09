import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import travelSchema from "../schemas/travels.schema.js";
import { postTravels } from "../controllers/travels.controllers";

const travelsRouter = Router();

travelsRouter.post("/travels", validateSchema(travelSchema), postTravels);

export default travelsRouter;