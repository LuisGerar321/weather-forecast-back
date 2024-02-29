import { Router } from "express";
import WeatherController from "../controllers/WeatherController";
import { PlacesLocationSchema } from "../validators";
import { validateSchema } from "../middlewares";

const WeatherRoutes = Router();

WeatherRoutes.post("/", validateSchema(PlacesLocationSchema), WeatherController.handleGetWeatherForecast);

export default WeatherRoutes;
