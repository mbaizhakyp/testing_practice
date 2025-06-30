const calculator = require("./calculator");

test("adds two numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("subtracts two numbers", () => {
  expect(calculator.subtract(7, 2)).toBe(5);
});

test("multiplies two numbers", () => {
  expect(calculator.multiply(4, 5)).toBe(20);
});

test("divides two numbers", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("throws error when dividing by zero", () => {
  expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero");
});
