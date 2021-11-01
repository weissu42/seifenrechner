export const round = (value: number, digits = 2): number => {
  return Math.round(value * 10 ** digits) / 10 ** digits;
};
