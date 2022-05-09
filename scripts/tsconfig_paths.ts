import { compilerOptions } from "../tsconfig.json";
import { Alias } from "vite";
import { resolve } from "path";
export const vite_tsconfig_path = () => {
  const accumulator = [] as Alias[];

  for (const key in compilerOptions.paths) {
    const path =
      compilerOptions.paths[key as keyof typeof compilerOptions.paths];

    accumulator.push({
      find: key,
      replacement: resolve(process.cwd(), ...path),
    });
  }

  return accumulator;
};
