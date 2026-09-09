import { readFile } from "node:fs/promises";
await readFile("src/index.ts");
console.log("Hello World");
