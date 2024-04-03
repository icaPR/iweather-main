import { render, screen } from "@testing-library/react-native";
import { NextDays } from "@components/NextDays";

import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
  it("should be render day", () => {
    render(
      <NextDays
        data={[
          {
            day: "01/04",
            min: "25°c",
            max: "27°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "02/04",
            min: "24°c",
            max: "27°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "03/04",
            min: "26°c",
            max: "28°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "04/04",
            min: "27°c",
            max: "29°c",
            icon: clearDay,
            weather: "Chuva fraca",
          },
          {
            day: "05/04",
            min: "29°c",
            max: "30°c",
            icon: clearDay,
            weather: "Nublado",
          },
        ]}
      />
    );
    expect(screen.getByText("05/04")).toBeTruthy();
  });
});
