import axios, { AxiosResponse } from "axios";
import { config } from "../config";
import { IGeoCoords } from "../interfaces";

const { weatherApiKey } = config;
class Weather {
  private apiKey: string;
  public static instance: Weather;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public async getFiveDayForecast({ lat, lng }: IGeoCoords): Promise<any> {
    try {
      const res: AxiosResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${this.apiKey}&units=metric`);
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export const weatherSDK = new Weather(weatherApiKey);
