let array = [600, 470, 170, 430, 300];
var suma = 0;
var altura1 = 600;
var altura2 = 318;
var altura3 = 170;
var altura4 = 358;
var altura5 = 300;
var num = 0;
var media = 0;
for(let i of array){
    suma += i;
    num += 1
}
media = suma / num;
console.log(media);
let res1 = media - altura1;
let res2 = media - altura2;
let res3 = media - altura3;
let res4 = media - altura4;
let res5 = media - altura5;
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);

let varianza = ((Math.pow(res1,2)) + (Math.pow(res2,2)) + (Math.pow(res3,2)) + (Math.pow(res4,2)) + (Math.pow(res5,2))) / 5;
let desviacion = parseInt(Math.sqrt(varianza)) + "mm";
console.log(varianza);
console.log("La desviación del ejemplo de los perritos: " + desviacion);


