import { getNextDays } from "./getNextDays";

test("should be return the next fixe days", () => {
  const days = getNextDays();

  expect(days.length).toBe(5);
});
