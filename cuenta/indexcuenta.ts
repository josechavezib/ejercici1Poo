import { cuenta } from "./cuenta";

let titular1: cuenta = new cuenta("jose", 100000)

titular1.mostrardatos();

titular1.ingresar(100000);
titular1.mostrardatos();

titular1.retirar(20000);
titular1.mostrardatos();
console.log("valor ingresado:",titular1.ingresar(100000));
console.log("valor retirado:",titular1.retirar(20000));