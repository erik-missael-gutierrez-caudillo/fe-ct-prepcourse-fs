/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if (num > (0)) {
      return("Es positivo"); 
   } else if (num < 0) {
      return("Es negativo")
   } else {
      return(false);
   }
}
console.log(esPositivo(1));
console.log(esPositivo(-1));
console.log(esPositivo(0));


function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   return(str + "!");
};
console.log(agregarSimboloExclamacion("hola world"));

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   return(nombre + " " + apellido);
};
console.log(combinarNombres("Soy ", "Henry"));

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   return("Hola" + " " + nombre + "!");
};
console.log(obtenerSaludo("Erik"));

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   return(alto  * ancho);
};
console.log(obtenerAreaRectangulo(4, 8));

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   return (lado * lado);
}; 
console.log(retornarPerimetro(4));

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   return (base * altura / 2);
};
console.log(areaDelTriangulo(7, 5));

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
  var valor = euro * 1.2;
   return(valor);
  }

console.log(deEuroAdolar(10));

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
   return("Es vocal");
} else if (letra.lengh == 1){
   return("Dato incorrecto");
} else {
   return("Dato incorrecto");
}
}
console.log(esVocal("b"));
console.log(esVocal("a"));
console.log(esVocal("e"));
console.log(esVocal("i"));
console.log(esVocal("o"));
console.log(esVocal("u"));
console.log(esVocal("ae"));



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
