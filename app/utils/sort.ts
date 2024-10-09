export const alphabeticallyByKey: <
  T extends Record<string, any>,
  key extends keyof T
>(
  key: keyof T
) => (c1: T[key], c2: T[key]) => number = (key) => (c1, c2) => {
  if (c1[key] < c2[key]) {
    return -1;
  }
  if (c1[key] > c2[key]) {
    return 1;
  }
  return 0;
};
