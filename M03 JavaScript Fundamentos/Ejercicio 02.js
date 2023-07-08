/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(str) {
    // Debe retornar un string.
    // Tu código:
 return(str);
 }
 console.log(devolverString("Henry"));
 
 // ⛔️ "X" e "Y" son números.
 
 function suma(x, y) {
    // Retorna el resultado de su suma.
    // Tu código:
    return(x + y);
 }
console.log(suma(7, 9));

 function resta(x, y) {
    // Retorna el resultado de la resta.
    // Tu código:
    return(x - y);
 }
 console.log(resta(9, 8));
 
 function divide(x, y) {
    // Retorna el resultado de su división.
    // Tu código:
    return(x / y);
 }
 console.log(divide(2, 1));
 
 function multiplica(x, y) {
    // Retorna el resultado de su multiplicación.
    // Tu código:
 return(x * y);
 }
console.log(multiplica(8, 7));
 
 function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y".
    // Tu código:
    return(x % y );
 }
 console.log(obtenerResto(7, 2));

 


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
