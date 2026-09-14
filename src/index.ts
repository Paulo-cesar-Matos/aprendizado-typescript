import readline from "node:readline/promises";
import process from "node:process";
type resposta = "sim" | "não";

process.stdout.write(
  "faço aniversário hj, só que não sei minha idade, tem como me ajudar?\n",
);

async function obterResposta(): Promise<resposta> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const resposta = (await rl.question("")) as resposta;
  rl.close();
  return resposta;
}

let resposta = "sim";

async function main() {
  const resposta = await obterResposta();
  if (resposta === "sim") {
    console.log("Que legaaaaaaaaallll!!!!");
  } else (resposta === "não");
  {
    console.log("vc tem exatos 37 segundos para sair da minha casa");
  }
}
main();

def (resposta === "sim") = "true"

function def(_arg0: boolean) {
  throw new Error("Function not implemented.");
}
