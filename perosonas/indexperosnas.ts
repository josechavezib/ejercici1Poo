import {personas } from "./perosnas";

let persona1: personas = new personas("jose",32,3165564589,"cra 12 # 67 n 12","popayan")
let persona2: personas = new personas("alejo",28,3104558909,"calle 15 # 67-34","popayan")
let persona3: personas = new personas("juan",17,3112341011,"cra 26 # 60-70","timbio")
let persona4: personas = new personas("paola",35,3135109080,"cra 9 # 6-98","cali")
let persona5: personas = new personas("lina",26,3214803321,"cra 9 # 20 n 48","pasto")


persona1.mostrarDatos();
persona2.mostrarDatos();
persona3.mostrarDatos();
persona4.mostrarDatos();
persona5.mostrarDatos();


console.log(`${persona1.getNombre()} es ${persona1.esMayorDeEdad() ? "mayor" : "menor"} de edad.`);
console.log(`${persona2.getNombre()} es ${persona2.esMayorDeEdad() ? "mayor" : "menor"} de edad.`);
console.log(`${persona3.getNombre()} es ${persona3.esMayorDeEdad() ? "mayor" : "menor"} de edad.`);
console.log(`${persona4.getNombre()} es ${persona4.esMayorDeEdad() ? "mayor" : "menor"} de edad.`);
console.log(`${persona5.getNombre()} es ${persona5.esMayorDeEdad() ? "mayor" : "menor"} de edad.`);