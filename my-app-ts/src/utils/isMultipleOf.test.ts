import { isMultipleOf } from "./isMultipleOf";

test.each([
  { num1: 4, num2: 2, expectedResult: true },
  { num1: 4, num2: -2, expectedResult: true },
  { num1: -4, num2: -2, expectedResult: true },
  { num1: -4, num2: 2, expectedResult: true },
  { num1: 5, num2: 2.5, expectedResult: true },
  { num1: 5, num2: 2, expectedResult: false },
])(
  "Positive num1 is a multiple of positive num2 ($num1,$num2)",
  ({ num1, num2, expectedResult }) => {
    const result = isMultipleOf(num1, num2);

    expect(result).toEqual(expectedResult);
  }
);
