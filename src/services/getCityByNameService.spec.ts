import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";
describe("API: getCityByNameService", () => {

  it("should return a city details", async () => {
    const data = {
      id: '1',
      name: 'Distrito Federal',
      sys: {
        country: 'BR'
      },
      coord: {
        lat: 123,
        long: 456
      }
    };

    jest.spyOn(api, "get").mockResolvedValue({ data });
    const response = await getCityByNameService("Distrito Federal");

    expect(response.length).toBeGreaterThan(0);
  });
});