import { render } from "@testing-library/react-native";
import { Routes } from ".";

describe("Routes", () => {
  it("should be render Search screen when not city selected", () => {
    render(<Routes />)
  });
});