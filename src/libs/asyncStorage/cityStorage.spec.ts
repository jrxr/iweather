import { getStorageCity } from "./cityStorage";

describe("Storage: CityStorage", () => {
  it("should be return null when dont have a city storaged", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull();
  });
});