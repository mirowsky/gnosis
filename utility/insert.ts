export const insert = <T extends unknown[], U extends unknown[]>(
  array: T,
  newArray: U,
  index: number
): Array<T[number] & U[number]> => {
  return [...array.slice(0, index), ...newArray, ...array.slice(index)];
};
