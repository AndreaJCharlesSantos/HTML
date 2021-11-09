let t1 = 300;
let t2 = 300;
let t3 = 400;

let tarifa1 = t1 * parseInt(1);
let tarifa2 = t2 * parseInt(3);
let tarifa3 = t3 * parseInt(5);
console.log("La CFE genera la factura con base en la lectura de Kwh consumidos en un bimestre los primeros 300kw son a la tarifa1 (basica) los siguientes 300 kw son a la tarifa 2(intermiedia) de 601 kw hacia arriba son a la tarifa de alto consumo dado un consumo en Kw y los costos de cada tarifa escribir un pequeño programa  en javascipt que obtenga el total a pagar y presente el detalle a pagar de cada tarifa")
console.log("Tarifa 1: 300*1");
console.log("Tarifa 1: 300*3");
console.log("Tarifa 1: 400*5");
console.log("Tarifa 1: " + tarifa1);
console.log("Tarifa 2: " + tarifa2);
console.log("Tarifa 3: " + tarifa3);

let res = tarifa1 + tarifa2 + tarifa3;
console.log("Total a pagar: " + res);
