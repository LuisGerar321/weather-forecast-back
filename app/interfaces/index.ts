export interface IGeoCoords {
  lat: string;
  lng: string;
}
export interface IPlaceGeneral {
  city_name: string;
  state: string;
  country: string;
}

export interface IPlacesInfo extends IPlaceGeneral {
  id: number;
  slug: string;
  city_slug: string;
  display: string;
  ascii_display: string;
  city_ascii_name: string;
  lat: string;
  long: string;
  result_type: string;
  popularity: string;
  sort_criteria: number;
}

export interface IResponse {
  status: number;
  message: string;
  data?: any;
}
