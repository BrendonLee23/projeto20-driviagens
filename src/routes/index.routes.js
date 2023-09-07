import { Router } from "express";
import citiesRouter from "./cities.routes";
import flightsRouter from "./flights.routes";
import travelsRouter from "./travels.routes";
import passengersRouter from "./passengers.routes";


const router = Router()

router.use(citiesRouter)
router.use(flightsRouter)
router.use(travelsRouter)
router.use(passengersRouter)

export default router;
