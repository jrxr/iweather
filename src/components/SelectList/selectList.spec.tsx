import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from ".";

describe("Component: SelectList", () => {
  it("should be return city details selected.", () => {
    const data = [
      { id: "1", name: "Distrito Federal", latitude: 123, longitude: 456 },
      { id: "2", name: "São Paulo", latitude: 789, longitude: 987 },
    ];

    const onPress = jest.fn();

    render(
      <SelectList 
        data={data} 
        onChange={() => {}} 
        onPress={onPress} 
      />
    );

    const selectedCity = screen.getByText(/Distrito/i);
    fireEvent.press(selectedCity);

    expect(onPress).toBeCalledWith(data[1]);
  });


  it("not should be show options when data props is empty.", () => {
    render(
      <SelectList 
        data={[]} 
        onChange={() => {}} 
        onPress={() => {}} 
      />
    );

    const options = screen.getByTestId("options");
    expect(options.children).toHaveLength(0);
  });
});
