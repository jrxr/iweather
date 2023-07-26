import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";
describe("Service: getCityByNameService", () => {

  it("should return a city details", async () => {

    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });
    const response = await getCityByNameService("Distrito Federal");

    expect(response.length).toBeGreaterThan(0);
  });
});