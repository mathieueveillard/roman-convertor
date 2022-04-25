import { toRomanNumeral } from ".";

describe("v1", function () {
  test("Single digits", function () {
    expect(toRomanNumeral(1)).toEqual("I");
  });

  test("Single digits", function () {
    expect(toRomanNumeral(5)).toEqual("V");
  });

  test("Single digits", function () {
    expect(toRomanNumeral(10)).toEqual("X");
  });

  test("Single digits", function () {
    expect(toRomanNumeral(50)).toEqual("L");
  });

  test("Single digits", function () {
    expect(toRomanNumeral(100)).toEqual("C");
  });

  test("Single digits", function () {
    expect(toRomanNumeral(500)).toEqual("D");
  });

  test("Single digits", function () {
    expect(toRomanNumeral(1000)).toEqual("M");
  });

  test("Many times the same digit", function () {
    expect(toRomanNumeral(2)).toEqual("II");
  });

  test("Many times the same digit", function () {
    expect(toRomanNumeral(3)).toEqual("III");
  });

  test("Many times the same digit", function () {
    expect(toRomanNumeral(20)).toEqual("XX");
  });

  test("Combination of digits", function () {
    expect(toRomanNumeral(6)).toEqual("VI");
  });

  test("Substitutions", function () {
    expect(toRomanNumeral(4)).toEqual("IV");
  });

  test("Substitutions", function () {
    expect(toRomanNumeral(9)).toEqual("IX");
  });

  test("Substitutions", function () {
    expect(toRomanNumeral(40)).toEqual("XL");
  });

  test("Substitutions", function () {
    expect(toRomanNumeral(90)).toEqual("XC");
  });

  test("Substitutions", function () {
    expect(toRomanNumeral(400)).toEqual("CD");
  });

  test("Substitutions", function () {
    expect(toRomanNumeral(900)).toEqual("CM");
  });

  test("[Control]", function () {
    expect(toRomanNumeral(1789)).toEqual("MDCCLXXXIX");
  });
});
