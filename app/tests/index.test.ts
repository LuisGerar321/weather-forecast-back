import { IGeoCoords, IPlacesInfo } from "../interfaces";
import { placesSDK } from "../services/Places";
import { weatherSDK } from "../services/Weather";

const locations = [
  {
    city_name: "Puebla",
    state: "Puebla",
    country: "México",
  },
  {
    city_name: "Querétaro",
    state: "Querétaro",
    country: "México",
  },
  {
    city_name: "San Francisco",
    state: "California",
    country: "United States",
  },
  {
    city_name: "Miami",
    state: "Florida",
    country: "United States",
  },
  {
    city_name: "Seattle",
    state: "Washington",
    country: "United States",
  },
];

const locationsSouthAmerica = [
  {
    city_name: "Buenos Aires",
    state: "Buenos Aires",
    country: "Argentina",
  },
  {
    city_name: "Córdoba",
    state: "Córdoba",
    country: "Argentina",
  },
  {
    city_name: "Rosario",
    state: "Santa Fe",
    country: "Argentina",
  },
  {
    city_name: "Santiago",
    state: "Santiago",
    country: "Chile",
  },
  {
    city_name: "Valparaíso",
    state: "Valparaíso",
    country: "Chile",
  },
  {
    city_name: "Concepción",
    state: "Concepción",
    country: "Chile",
  },
];

describe("getPlaceInfo Integration Tests for Mexico and United States", () => {
  test.each(locations)("should return place info for %p", async (location) => {
    const result = await placesSDK.getPlaceInfo(location);
    expect(result).not.toBeNull();
  });
});

describe("getPlaceInfo Integration Tests for Chile and Argentina", () => {
  test.each(locationsSouthAmerica)("should return null place info for %p", async (location) => {
    const result = await placesSDK.getPlaceInfo(location);
    expect(result).toBeNull();
  });
});

describe("getFiveDayForecast Integration Tests for Mexico Location", () => {
  test.each(locations.slice(0, 2))("should return weather info for %p", async (location) => {
    const placesInfo: IPlacesInfo | null = await placesSDK.getPlaceInfo(location);
    const coordsByPlace: IGeoCoords = await placesSDK.getGeoCoord(placesInfo as IPlacesInfo);
    const result = await weatherSDK.getFiveDayForecast(coordsByPlace);
    expect(result).not.toBeNull();
  });
});

describe("getFiveDayForecast Integration Tests for Argentina Location", () => {
  test.each(locationsSouthAmerica.slice(0, 2))("should return null info for %p", async (location) => {
    const placesInfo: IPlacesInfo | null = await placesSDK.getPlaceInfo(location);
    expect(placesInfo).toBeNull();
  });
});
