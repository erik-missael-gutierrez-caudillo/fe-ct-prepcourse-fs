/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString() {
    // Debe retornar un string.
    // Tu código:
 console.log("string");
 }
 devolverString("Hi World");
 
 // ⛔️ "X" e "Y" son números.
 
 function suma(x, y) {
    // Retorna el resultado de su suma.
    // Tu código:
    console.log(x - y);
 }
suma(7, 9);

 function resta(x, y) {
    // Retorna el resultado de la resta.
    // Tu código:
    console.log(x - y);
 }
 resta(9, 8);
 
 function divide(x, y) {
    // Retorna el resultado de su división.
    // Tu código:
    console.log(x / y);
 }
 divide(2, 1);
 
 function multiplica(x, y) {
    // Retorna el resultado de su multiplicación.
    // Tu código:
 console.log(x * y);
 }
multiplica(8, 7);
 
 function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y".
    // Tu código:
    console.log(x % y);
 }
 obtenerResto(7, 9);

 


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
