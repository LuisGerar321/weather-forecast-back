import axios, { AxiosResponse } from "axios";
import { IGeoCoords, IPlaceGeneral, IPlacesInfo } from "../interfaces";
import { normalizeString } from "../utils";

class Places {
  public async getPlaceInfo({ city_name, state, country }: IPlaceGeneral): Promise<IPlacesInfo | null> {
    try {
      const res: AxiosResponse = await axios.get(`https://search.reservamos.mx/api/v2/places?q=${city_name}`);
      const places: IPlacesInfo[] = res.data;
      const cities: IPlacesInfo[] = places.filter((place: IPlacesInfo) => place.result_type === "city");

      const bestMatch: IPlacesInfo | undefined = cities.find(
        (place: IPlacesInfo) => normalizeString(place.country) === normalizeString(country) && normalizeString(place.state) === normalizeString(state),
      );

      if (!bestMatch) return null;
      return bestMatch;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  public getGeoCoord(place: IPlacesInfo): IGeoCoords {
    return { lat: place.lat, lng: place.long };
  }
}

export const placesSDK = new Places();
