import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from "@libs/asyncStorage/cityStorage";
import { CityProps } from "@services/getCityByNameService";

const newCity: CityProps = {
  id: "1",
  name: "Londrina",
  latitude: 123,
  longitude: 456,
};

describe("Storage: CityStorage", () => {
  it("must return null when there is no city in the storage", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull();
  });

  it("should return to the city that was stored", async () => {
    await saveStorageCity(newCity);
    const response = await getStorageCity();
    expect(response).toEqual(newCity);
  });

  it("should remove the stored cities", async () => {
    await saveStorageCity(newCity);
    await removeStorageCity();
    const response = await getStorageCity();
    expect(response).toBeNull();
  });
});
