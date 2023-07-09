/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
    // "x" e "y" son números enteros.
    // Retornar el número más grande.
    // Si son iguales, retornar cualquiera de los dos.
    // Tu código:
   if (x === y) {
      console.log((x || y));
   } else if (x < y) {
      console.log((y));
   } else if (x > y) {
      console.log((x));
   }
   return x, y;
   }

   obtenerMayor(7, 9);
   obtenerMayor(8,8);
 
 function mayoriaDeEdad(edad) {
    // Determinar si la persona puede ingresar al evento según su edad.
    // Si tiene 18 años ó más debe retornar el string: "Allowed".
    // Caso contrario: "Not allowed".
    // Tu código:
    if (edad >= 18) {
      return("Allowed");
    } else {
      return ("Not allowed");
    }
   }
   


 console.log(mayoriaDeEdad(17));
 console.log(mayoriaDeEdad(19));
 
 function conection(status) {
    // El argumento "status" representa el estado de conexión de un usuario.
    // Si el estado es igual a 1, el usuario está "Online".
    // Si el estado es igual a 2, el usuario está "Away".
    // De lo contrario, presumimos que el usuario está "Offline".
    // Retornar el estado de conexión del usuario.
    // Tu código:
   if (status == 1) {
      console.log("Online");
   } else if (status == 2) {
      console.log("Away");
   } else {
      console.log("Offline");
   }
   return status;
 }

 conection(1);
 conection(2);
 conection(3);

 function saludo(idioma) {
    // Retornar un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!".
    // Si "idioma" es "mandarin", devuelve "Ni Hao!".
    // Si "idioma" es "ingles", devuelve "Hello!".
    // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
    // Tu código:
    if(idioma == "aleman"){
      console.log("Guten Tag!");
    }else if (idioma == "mandarin") {
      console.log("Ni Hao!");
    }else if (idioma == "ingles") {
      console.log("Hello!")
    } else {
      console.log("Hola!");
    }
    return idioma;
 }
 
 
 saludo("aleman");
 saludo("mandarin");
 saludo("ingles");
 saludo("frances");








 function colors(color) {
    // La función recibe un color. Retornar el string correspondiente:
    // En caso que el color recibido sea "blue"   --> "This is blue".
    // En caso que el color recibido sea "red"    --> "This is red".
    // En caso que el color recibido sea "green"  --> "This is green".
    // En caso que el color recibido sea "orange" --> "This is orange".
    // Si no es ninguno de esos colores           --> "Color not found".
    // IMPORTANTE: utilizar el statement SWITCH.
    // Tu código:
    if (color == "blue") {
      console.log("This is blue");
    } else if (color == "red") {
      console.log("This is red");
    }else if (color =="green") {
      console.log("This is green");
    }else if (color == "orange") {
      console.log("This is orange");
    } else {
      console.log("Color not found");
    }
    return color;
 }

colors("blue");
colors("red");
colors("green");
colors("orange");
colors("gris");
 
 function esDiezOCinco(num) {
    // Retornar true si "num" es 10 o 5.
    // De lo contrario, retornar false.
    // Tu código:
   if (num == 5 || num == 10){
   console.log("true");
 } else {
   console.log("false");
 }
 return num;
}

esDiezOCinco(5);
esDiezOCinco(7);

 function estaEnRango(num) {
    // Retornar true si "num" es menor que 50 y mayor que 20.
    // De lo contrario, retornar false.
    // Tu código:
    if (num < 50 && num > 20) {
      console.log("true");
    } else {
      console.log("false");
    }
    return num;
 }
 
estaEnRango(21);
estaEnRango(20);



 function esEntero(num) {
    // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
    // Ejemplo: 0.8   ---> false
    // Ejemplo: 1     ---> true
    // Ejemplo: (-10) ---> true
    // De lo contrario, retorna false.
    // Tu código:
    if(Number.isInteger(num)) {
      console.log("true");
    } else {
      console.log("false");
    }
    return num;
  }

esEntero(5.8);
esEntero(5);
esEntero(8);
esEntero(0);



 
 function fizzBuzz(num) {
    // Si "num" es divisible entre 3, retorna "fizz".
    // Si "num" es divisible entre 5, retorna "buzz".
    // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
    // De lo contrario, retorna false.
    // Tu código:
    if (num % 3 == 0 && num % 5 == 0) {
      console.log("fizzbuzz");
    } else if (num % 3 == 0) {
      console.log("fizz");
    } else if (num % 5 == 0) {
      console.log("buzz");
    } else {
      console.log("false");
    }
    return num;
 }

fizzBuzz(3);
fizzBuzz(15);
fizzBuzz(21);
fizzBuzz(17);



 
 function operadoresLogicos(num1, num2, num3) {
    // La función recibe tres números distintos.
    // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
    // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
    // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    // Si todos los argumentos son cero, retornar ---> "Error".
    // Si no se cumple ninguna de las condiciones anteriores, retornar false.
    // Tu código:
   if (num1 > num2 && num1 > num3 && Number.isInteger(num1)) {
      console.log("Numero 1 es mayor y positivo");
   } else if (num1 < 0 || num2 < 0 ||
      +  num3 < 0) {
      console.log("Hay negativos");
   } else if (num3 > num2 && num3 > num1) {
      return(num3 * 2);
   } else if (num1, num2, num3 == 0) {
      console.log("Error");
   } else {
      console.log("false");
   }
   return num1, num2, num3;
   }

   operadoresLogicos(8, 2, 6);
   operadoresLogicos(-7, 2, 6);
   operadoresLogicos(1, 2, 6);
   operadoresLogicos(0, 0, 0);
   operadoresLogicos(1, 1, 1);

 


 
 function esPrimo(num) {
    // Retornar true si "num" es primo.
    // De lo contrario retorna false.
    // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
    // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
    // [Nota]: los números negativos, 0 y 1 NO son números primos.
    // Tu código:
   if(num == 0 || num == 1 || num == 4) 
      console.log("false");
   for (var x = 2; x < num / 2; x++) {
      if (num % x === 0) 
   console.log("false");
   }
   console.log("true");
 }
 
esPrimo(2);
esPrimo(4);


 function esVerdadero(valor) {
    // Si "valor" es verdadero retornar "Soy verdadero".
    // Caso contrario, retornar "Soy falso".
    // Tu código:
    if(valor === "verdadero"){
   console.log("Soy verdadero");
    } else{
      console.log("Soy falso");
    }
    return valor;
 }
 esVerdadero("verdadero");
 esVerdadero("falso");



 function tieneTresDigitos(num) {
    // Si el número recibido tiene tres dígitos retornar true.
    // Caso contrario, retornar false.
    // Tu código:
    /*
Cadena:       n u m
Índices:      0 1 2 3 4 5 6 7 8 9
*/
    if(num > 99 && num < 1000) {
      console.log("true");
    } else {
      console.log("false");
    }
    return num;
 }

(tieneTresDigitos(267));
(tieneTresDigitos(67));


 
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
 }

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