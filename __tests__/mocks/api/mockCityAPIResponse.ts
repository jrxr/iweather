import { CityAPIResponse } from "@services/getCityByNameService";

export const mockCityAPIResponse: CityAPIResponse = {
  id: "1",
  name: "Distrito Federal",
  sys: {
    country: "BR",
  },
  coord: {
    lat: 123,
    lon: 456,
  },
};
