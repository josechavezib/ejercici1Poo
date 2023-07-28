import { operaciones } from "./operaciones";

let operacion1: operaciones = new operaciones(10,20)
let operacion2: operaciones = new operaciones(50,15)
let operacion3: operaciones = new operaciones(30,5)
let operacion4: operaciones = new operaciones(12,40)
let operacion5: operaciones = new operaciones(25,25)


console.log("la suma es:" , operacion1.suma());
console.log("la resta es:" , operacion1.resta());
console.log("la multiplicacion es:" , operacion1.multi());
console.log("la division es:" , operacion1.dividir());
console.log("--------------------------------------");

console.log("la suma es:" , operacion2.suma());
console.log("la resta es:" , operacion2.resta());
console.log("la multiplicacion es:" , operacion2.multi());
console.log("la division es:" , operacion2.dividir());
console.log("--------------------------------------");

console.log("la suma es:" , operacion3.suma());
console.log("la resta es:" , operacion3.resta());
console.log("la multiplicacion es:" , operacion3.multi());
console.log("la division es:" , operacion3.dividir());
console.log("--------------------------------------");

console.log("la suma es:" , operacion4.suma());
console.log("la resta es:" , operacion4.resta());
console.log("la multiplicacion es:" , operacion4.multi());
console.log("la division es:" , operacion4.dividir());
console.log("--------------------------------------");

console.log("la suma es:" , operacion5.suma());
console.log("la resta es:" , operacion5.resta());
console.log("la multiplicacion es:" , operacion5.multi());
console.log("la division es:" , operacion5.dividir());
console.log("--------------------------------------");
