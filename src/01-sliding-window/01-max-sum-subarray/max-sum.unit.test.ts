import { maxSumSubarray } from "./max-sum";

describe("maxSumSubarray", () => {
  it("returns the maximum sum of a subarray of size k", () => {
    expect(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)).toBe(9);
  });

  it("works when the window contains the entire array", () => {
    expect(maxSumSubarray([2, 3, 4], 3)).toBe(9);
  });

  it("works with negative numbers", () => {
    expect(maxSumSubarray([-2, -1, -5, -1], 2)).toBe(-3);
  });
});
