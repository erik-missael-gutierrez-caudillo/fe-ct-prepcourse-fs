 

/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if (x === y) {
      console.log(true);
   } else {
      console.log(false);
   }
}
sonIguales(5 === 5);

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if (str1 === str2) {
      console.log(true);
   } else {
      console.log(false);
   }
}
tienenMismaLongitud("Hi", "World");

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if (num < 90) {
    console.log(true);
   } else {
      console.log(false);
}
}
menosQueNoventa(45);

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num > 50) {
      console.log(true);
   } else {
      console.log(false);
}
}
mayorQueCincuenta(56);

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if (num / 2 % 0) {
      console.log(true);
   } else {
      console.log(false);
   }
}
esPar(7);

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
 if (num / 2 % 1) {
   console.log(true); 
 } else {
   console.log(false);
 }
}
esImpar(6);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};




