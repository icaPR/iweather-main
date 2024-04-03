import { getNextDays } from "./getNextDays";

describe("getNextDays", () => {
  it("should return in the next five days", () => {
    const days = getNextDays();

    expect(days.length).toBe(5);
  });
});
