import { somar } from "./somar.mjs";
import { multiplicar } from "./multiplicar.mjs"
const numero1 = 5
const numero2 = 3
const resultadoSoma = somar(numero1,numero2 )
const resultadoMultiplicar = multiplicar(numero1, numero2)
console.log(`${numero1} + ${numero2} = ${resultadoSoma}`);
console.log(`${numero1} + ${numero2} = ${resultadoMultiplicar}`);
