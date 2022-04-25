import { toRomanNumeral } from ".";

describe("v0", function () {
  describe("toRomanNumeral", function () {
    test("1 => I", function () {
      expect(toRomanNumeral(1)).toEqual("I");
    });
    test("2 => II (repetition of a digit)", function () {
      expect(toRomanNumeral(2)).toEqual("II");
    });
    test("5 => V", function () {
      expect(toRomanNumeral(5)).toEqual("V");
    });
    test("6 => VI (introducing powers)", function () {
      expect(toRomanNumeral(6)).toEqual("VI");
    });
    test("16 => XVI (generalization)", function () {
      expect(toRomanNumeral(16)).toEqual("XVI");
    });
    test("50 => L", function () {
      expect(toRomanNumeral(50)).toEqual("L");
    });
    test("100 => C", function () {
      expect(toRomanNumeral(100)).toEqual("C");
    });
    test("500 => D", function () {
      expect(toRomanNumeral(500)).toEqual("D");
    });
    test("1000 => M", function () {
      expect(toRomanNumeral(1000)).toEqual("M");
    });
  });

  describe("with replacements", function () {
    test("4 => IV", function () {
      expect(toRomanNumeral(4)).toEqual("IV");
    });
    test("9 => IX", function () {
      expect(toRomanNumeral(9)).toEqual("IX");
    });
    test("40 => XL", function () {
      expect(toRomanNumeral(40)).toEqual("XL");
    });
    test("90 => XC", function () {
      expect(toRomanNumeral(90)).toEqual("XC");
    });
    test("400 => CD", function () {
      expect(toRomanNumeral(400)).toEqual("CD");
    });
    test("900 => CM", function () {
      expect(toRomanNumeral(900)).toEqual("CM");
    });
  });

  describe("[control]", function () {
    test("147 => CXLVII", function () {
      expect(toRomanNumeral(147)).toEqual("CXLVII");
    });
    test("599 => DXCIX", function () {
      expect(toRomanNumeral(599)).toEqual("DXCIX");
    });
  });
});
