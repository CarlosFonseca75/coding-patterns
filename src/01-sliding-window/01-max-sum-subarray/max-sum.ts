export function bruteForce(numbers: number[], windowSize: number): number {
  let maxSum = 0;

  numbers.forEach((number, index) => {
    const range = numbers.slice(index, index + windowSize);

    if (range.length < windowSize) {
      return;
    }

    const currentSum = range.reduce((acc, num) => acc + num);

    if (index === 0) {
      maxSum = currentSum;
      return;
    }

    maxSum = Math.max(maxSum, currentSum);
  });

  return maxSum;
}

export function slidingWindow(numbers: number[], windowSize: number): number {
  let result = 0;
  let currentSum = 0;

  numbers.forEach((_, index) => {
    if (index + windowSize > numbers.length) {
      return;
    }

    const left = numbers[index - 1];
    const right = numbers[index + windowSize - 1];

    if (index === 0) {
      currentSum = numbers.slice(0, windowSize).reduce((acc, num) => acc + num);
      result = currentSum;
      return;
    }

    currentSum = currentSum - left + right;

    result = Math.max(result, currentSum);
  });

  return result;
}
