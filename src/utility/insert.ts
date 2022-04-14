export const insert = <T extends unknown[], U extends unknown[]>(
  array: T,
  index: number,
  ...newArray: U
) => {
  return [...array.slice(0, index), ...newArray, ...array.slice(index)];
};
