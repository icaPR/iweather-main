import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { Routes } from "@routes/index";
import { render, waitFor, screen, act } from "@__tests__/utils/customRender";
import { api } from "@services/api";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";

describe("Routes", () => {
  it("should be render Search screen when not city selected", async () => {
    render(<Routes />);
    const title = await waitFor(() =>
      screen.findByText(/para ver a previsão/i)
    );
    expect(title).toBeTruthy();
  });
  it("should be render Dashboard screen when has city selected", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const city = {
      id: "1",
      name: "Londrina",
      latitude: 123,
      longitude: 456,
    };
    await saveStorageCity(city);

    render(<Routes />);

    await act(() => waitFor(() => render(<Routes />)));

    const title = screen.getByText(city.name);
    expect(title).toBeTruthy();
  });
});
