import { render, screen } from "@testing-library/react-native";
import { NextDays } from ".";

import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
  it("should be render day.", () => {
    render(
      <NextDays
        data={[
          {
            day: "26/07",
            min: "30°c",
            max: "34°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "27/07",
            min: "20°c",
            max: "34°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "28/07",
            min: "32°c",
            max: "34°c",
            icon: clearDay,
            weather: "Nublado",
          },
          {
            day: "29/07",
            min: "31°c",
            max: "34°c",
            icon: clearDay,
            weather: "Nublado",
          },
          {
            day: "30/07",
            min: "29°c",
            max: "34°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
        ]}
      />
    );

    expect(screen.getByText("29/07")).toBeTruthy();
  });
});
