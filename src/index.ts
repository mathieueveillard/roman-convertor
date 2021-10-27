import { IdentityFunctor } from "./utils/IdentityFunctor";

type Digit = "I" | "V" | "X" | "L" | "C" | "D" | "M";

interface Power {
  digit: Digit;
  value: number;
}

const powers: Power[] = [
  {
    digit: "M",
    value: 1000,
  },
  {
    digit: "D",
    value: 500,
  },
  {
    digit: "C",
    value: 100,
  },
  {
    digit: "L",
    value: 50,
  },
  {
    digit: "X",
    value: 10,
  },
  {
    digit: "V",
    value: 5,
  },
  {
    digit: "I",
    value: 1,
  },
];

interface Replacement {
  from: string;
  to: string;
}

const replacements: Replacement[] = [
  {
    from: "IIII",
    to: "IV",
  },
  {
    from: "VIV",
    to: "IX",
  },
  {
    from: "XXXX",
    to: "XL",
  },
  {
    from: "LXL",
    to: "XC",
  },
  {
    from: "CCCC",
    to: "CD",
  },
  {
    from: "DCD",
    to: "CM",
  },
];

export function toRomanNumeral(n: number): string {
  return IdentityFunctor(n) //
    .map(divideBySuccessivePowers)
    .map(proceedToReplacements)
    .get();
}

const divideBySuccessivePowers = (n: number): string => {
  const { result } = powers.reduce(
    ({ result, remaining }, power) => {
      const r = remaining % power.value;
      const q = (remaining - r) / power.value;
      return {
        result: result + repeatChar(power.digit)(q),
        remaining: r,
      };
    },
    { result: "", remaining: n }
  );
  return result;
};

const repeatChar = (char: string) => (times: number): string => [...Array(times)].map((_) => char).join("");

const proceedToReplacements = (s: string): string => {
  return replacements.reduce(applyReplacement, s);
};

const applyReplacement = (s: string, { from, to }: Replacement): string => s.replace(from, to);
