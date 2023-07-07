 

/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if (x === y) {
      return(true);
   } else {
      return(false);
   }
}
console.log(sonIguales(5, 5));
console.log(sonIguales(5, 7));

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if (str1.length === str2.length) {
      return(true);
   } else {
     return(false);
   }
}
console.log(tienenMismaLongitud("Hello", "World"));
console.log(tienenMismaLongitud("Hi", "World"));

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if (num < 90) {
    return(true);
   } else {
     return(false);
}
}
console.log(menosQueNoventa(45));
console.log(menosQueNoventa(91));

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num > 50) {
   return(true);
   } else {
   return(false);
}
}
console.log(mayorQueCincuenta(56));
console.log(mayorQueCincuenta(36));

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 == 0) {
      return(true);
   } else {
      return(false);
   }
}
console.log(esPar(6));
console.log(esPar(7));

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
 if (num % 2 == 1) {
   return(true); 
 } else {
   return(false);
 }
}
console.log(esImpar(5));
console.log(esImpar(6));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};




