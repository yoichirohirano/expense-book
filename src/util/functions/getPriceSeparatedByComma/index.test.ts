import getPriceSeparatedByComma from ".";

describe("getPriceSeparatedByComma", () => {
  test("3digit", () => {
    const num = 100;
    expect(getPriceSeparatedByComma(num)).toMatch(/100/);
  });
  test("4digit", () => {
    const num = 1000;
    expect(getPriceSeparatedByComma(num)).toMatch(/1,000/);
  });
  test("7digit", () => {
    const num = 1000000;
    expect(getPriceSeparatedByComma(num)).toMatch(/1,000,000/);
  });
});
