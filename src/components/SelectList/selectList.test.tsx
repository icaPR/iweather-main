import { fireEvent, render, screen } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should return the details of the selected city", () => {
    const data = [
      {
        id: "1",
        name: "Londrina",
        latitude: 123,
        longitude: 456,
      },
      {
        id: "2",
        name: "Curitiba",
        latitude: 789,
        longitude: 101,
      },
    ];

    const onPress = jest.fn();
    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);
    const selectedCity = screen.getByText(/Curitiba/);
    fireEvent.press(selectedCity);

    expect(onPress).toHaveBeenCalledWith(data[1]);
  });
  it("should not show a list of options", () => {
    const onPress = jest.fn();
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId("options");
    expect(options.children).toHaveLength(0);
  });
});
