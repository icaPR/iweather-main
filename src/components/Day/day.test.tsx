import { render, screen } from "@testing-library/react-native";
import { Day } from "@components/Day";

import clearDay from "@assets/clear_day.svg";

describe("Component: Day", () => {
  it("should render component day", () => {
    render(
      <Day
        data={{
          day: "01/04",
          min: "20°c",
          max: "25°c",
          icon: clearDay,
          weather: "Céu limpo",
        }}
      />
    );
    expect(screen.getByText("01/04")).toBeTruthy();
  });
});
