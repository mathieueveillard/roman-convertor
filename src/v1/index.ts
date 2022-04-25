interface Power {
  numeral: number;
  roman: string;
}

const POWERS: Power[] = [
  { numeral: 1000, roman: "M" },
  { numeral: 900, roman: "CM" },
  { numeral: 500, roman: "D" },
  { numeral: 400, roman: "CD" },
  { numeral: 100, roman: "C" },
  { numeral: 90, roman: "XC" },
  { numeral: 50, roman: "L" },
  { numeral: 40, roman: "XL" },
  { numeral: 10, roman: "X" },
  { numeral: 9, roman: "IX" },
  { numeral: 5, roman: "V" },
  { numeral: 4, roman: "IV" },
  { numeral: 1, roman: "I" },
];

export const toRomanNumeral = (n: number): string => {
  return recursiveConvertor(POWERS)(n);
};

const recursiveConvertor = (powers: Power[]) => (n: number): string => {
  const [power, ...nextPowers] = powers;
  const r = n % power.numeral;
  const q = (n - r) / power.numeral;
  if (r === 0) {
    return repeat(power.roman)(q);
  }
  return repeat(power.roman)(q) + recursiveConvertor(nextPowers)(r);
};

const repeat = (character: string) => (times: number): string => {
  return [...Array(times)].fill(character).join("");
};
