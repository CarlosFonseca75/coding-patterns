import { slidingWindow } from "./max-sum";

describe("slidingWindowSubarray", () => {
  it("returns the maximum sum of a subarray of size k", () => {
    expect(slidingWindow([2, 1, 5, 1, 3, 2], 3)).toBe(9);
  });

  it("works when the window contains the entire array", () => {
    expect(slidingWindow([2, 3, 4], 3)).toBe(9);
  });

  it("works with negative numbers", () => {
    expect(slidingWindow([-2, -1, -5, -1], 2)).toBe(-3);
  });

  it("works when the window size is 1", () => {
    expect(slidingWindow([2, 5, 1, 3], 1)).toBe(5);
  });
});
