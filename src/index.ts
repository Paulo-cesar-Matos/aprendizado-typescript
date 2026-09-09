import { readFile } from "node:fs/promises";
await readFile("src/index.ts");
declare const console: { log(message: string): void };
console.log("Hello World");