import { readFile } from "node:fs/promises";
await readFile("src/index.ts");
declare const console: {
  log(message?: any, ...optionalParams: any[]): void;
};
console.log("Hello, TypeScript!");
