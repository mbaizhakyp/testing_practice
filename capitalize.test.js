const capitalize = require("./capitalize.js");

it("Capitalizes a single word", () => {
  expect(capitalize("margulan")).toBe("Margulan");
});
