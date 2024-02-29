import { Request, Response } from "express";
import { IGeoCoords, IPlacesInfo } from "../interfaces";
import { placesSDK } from "../services/Places";
import { weatherSDK } from "../services/Weather";
import { ErrorResponse } from "../utils/Errors";

export default class WeatherController {
  public static async handleGetWeatherForecast(req: Request, res: Response) {
    try {
      const { city_name, state, country } = req.body;
      const place: IPlacesInfo | null = await placesSDK.getPlaceInfo({ city_name, state, country });

      if (!place)
        return res.status(404).send(
          new ErrorResponse({
            status: 404,
            message:
              "Location not found, check the inputs location as city_name, state, country and try again. It's important that you provided a location within 'México' or 'United States' to get a properly accuracy.",
          }),
        );

      const coordPlace: IGeoCoords = placesSDK.getGeoCoord(place);
      const weather = await weatherSDK.getFiveDayForecast(coordPlace);
      res.status(200).send({
        status: 200,
        message: "ok",
        data: weather,
      });
    } catch (error) {
      if (error instanceof ErrorResponse) return res.status(error?.status).send(error);
      if (error instanceof Error) return res.status(500).send(new ErrorResponse({ status: 500, message: error.message, data: error }));
    }
  }
}
