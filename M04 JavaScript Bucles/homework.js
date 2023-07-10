/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
    // "x" e "y" son números enteros.
    // Retornar el número más grande.
    // Si son iguales, retornar cualquiera de los dos.
    // Tu código:
   if(x > y || x == y)return x;
   else return y;
};
console.log(obtenerMayor(9, 6)); 
console.log(obtenerMayor(3, 3)); 


 function mayoriaDeEdad(edad) {
    // Determinar si la persona puede ingresar al evento según su edad.
    // Si tiene 18 años ó más debe retornar el string: "Allowed".
    // Caso contrario: "Not allowed".
    // Tu código:
    if(edad >= 18) return "Allowed";
    else return "Not Allowed";
   };
   
console.log(mayoriaDeEdad(19));
console.log(mayoriaDeEdad(17));


 function conection(status) {
    // El argumento "status" representa el estado de conexión de un usuario.
    // Si el estado es igual a 1, el usuario está "Online".
    // Si el estado es igual a 2, el usuario está "Away".
    // De lo contrario, presumimos que el usuario está "Offline".
    // Retornar el estado de conexión del usuario.
    // Tu código:
    if(status == 1)return 'Online';
    else if(status == 2)return 'Away';
    else return 'Offline';
 };

console.log(conection(1));
console.log(conection(2));
console.log(conection(3));


 function saludo(idioma) {
    // Retornar un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!".
    // Si "idioma" es "mandarin", devuelve "Ni Hao!".
    // Si "idioma" es "ingles", devuelve "Hello!".
    // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
    // Tu código:
    if(idioma == "aleman")return "Guten Tag!";
    else if (idioma == "mandarin")return "Ni Hao!";
    else if (idioma == "ingles")return "Hello!";
    else return "Hola!";
  };
 console.log(saludo("aleman"));
 console.log(saludo("mandarin"));
 console.log(saludo("ingles"));
 console.log(saludo(""));


 function colors(color) {
    // La función recibe un color. Retornar el string correspondiente:
    // En caso que el color recibido sea "blue"   --> "This is blue".
    // En caso que el color recibido sea "red"    --> "This is red".
    // En caso que el color recibido sea "green"  --> "This is green".
    // En caso que el color recibido sea "orange" --> "This is orange".
    // Si no es ninguno de esos colores           --> "Color not found".
    // IMPORTANTE: utilizar el statement SWITCH.
    // Tu código:
   switch (color){
   case 'blue':
      break;
   case 'red':
      break;
   case 'green':
      break;
   case 'orange':
      break;
   default:
      return 'Color not found';
   }
   return 'This is ' + color;
 }
console.log(colors("blue"));
console.log(colors(" "));
 
 function esDiezOCinco(num) {
    // Retornar true si "num" es 10 o 5.
    // De lo contrario, retornar false.
    // Tu código:
   if (num == 5 || num == 10)return true;
   else return false;
};
console.log(esDiezOCinco(5));
console.log(esDiezOCinco(7));

 function estaEnRango(num) {
    // Retornar true si "num" es menor que 50 y mayor que 20.
    // De lo contrario, retornar false.
    // Tu código:
    if (num < 50 && num > 20)return true;
     else return false;
     };
 
console.log(estaEnRango(21));
console.log(estaEnRango(20));



 function esEntero(num) {
    // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
    // Ejemplo: 0.8   ---> false
    // Ejemplo: 1     ---> true
    // Ejemplo: (-10) ---> true
    // De lo contrario, retorna false.
    // Tu código:
    if(Number.isInteger(num))
      return true;
    else 
      return false;
    };

console.log(esEntero(5.8));
console.log(esEntero(5));
console.log(esEntero(-8));
console.log(esEntero("a"));



 
 function fizzBuzz(num) {
    // Si "num" es divisible entre 3, retorna "fizz".
    // Si "num" es divisible entre 5, retorna "buzz".
    // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
    // De lo contrario, retorna false.
    // Tu código:
    if (num % 3 == 0 && num % 5 == 0) 
      return 'fizzbuzz';
     else if (num % 5 == 0) 
      return 'buzz';
     else if (num % 3 == 0) 
      return 'fizz';
     else
      return 'false';
     };

console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(19));


 
 function operadoresLogicos(num1, num2, num3) {
    // La función recibe tres números distintos.
    // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
    // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
    // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    // Si todos los argumentos son cero, retornar ---> "Error".
    // Si no se cumple ninguna de las condiciones anteriores, retornar false.
    // Tu código:
   if (num1 > num2 && num1 > num3 && Number.isInteger(num1)) {
      return "Numero 1 es mayor y positivo";
   } else if (num1 < 0 || num2 < 0 ||
      +  num3 < 0) {
      return "Hay negativos";
   } else if (num3 > num2 && num3 > num1) {
      return num3 * 2;
   } else if (num1, num2, num3 == 0) {
      return "Error";
   } else 
      return "false";
      };

   console.log(operadoresLogicos(8, 2, 6));
   console.log(operadoresLogicos(-7, 2, 6));
   console.log(operadoresLogicos(1, 2, 6));
   console.log(operadoresLogicos(0, 0, 0));
   console.log(operadoresLogicos(1, 1, 1));

 


 
 function esPrimo(num) {
    // Retornar true si "num" es primo.
    // De lo contrario retorna false.
    // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
    // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
    // [Nota]: los números negativos, 0 y 1 NO son números primos.
    // Tu código:
   if(num == 0 || num == 1 || num == 4) 
      return "false";
   for (var x = 2; x < num / 2; x++) {
      if (num % x === 0) 
   return "false";
   }
   return "true";
 };
 
console.log(esPrimo(2));
console.log(esPrimo(4));


 function esVerdadero(valor) {
    // Si "valor" es verdadero retornar "Soy verdadero".
    // Caso contrario, retornar "Soy falso".
    // Tu código:
    if(valor === "verdadero")
   return "Soy verdadero";
     else
   return "Soy falso";
};
 console.log(esVerdadero("verdadero"));
 console.log(esVerdadero("falso"));



 function tieneTresDigitos(num) {
    // Si el número recibido tiene tres dígitos retornar true.
    // Caso contrario, retornar false.
    // Tu código:
    /*
Cadena:       n u m
Índices:      0 1 2 3 4 5 6 7 8 9
*/
    if(num > 99 && num < 1000) 
      return "true";
     else
      return "false";
   };

console.log(tieneTresDigitos(267));
console.log(tieneTresDigitos(67));


 
 function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    i = 0;
   do {
      num += 5;
      i++;
   } while (i < 8);
   return num;
 };
 console.log(doWhile(1));


 /*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
/* module.exports = {
    obtenerMayor,
    mayoriaDeEdad,
    conection,
    saludo,
    colors,
    esDiezOCinco,
    estaEnRango,
    esEntero,
    fizzBuzz,
    operadoresLogicos,
    esPrimo,
    esVerdadero,
    tieneTresDigitos,
    doWhile,
 };*/