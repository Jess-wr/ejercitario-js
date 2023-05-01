/* Variables y tipo de datos
Lee las instrucciones de cada comentario y escribí el código para realizar la tarea */


//Crea una variable numero y asígnale un valor de tipo number.
var numero = 1;

//Crea una variable texto y asígnale un valor de tipo string.
var texto = "palabra"

//Crea una variable verdadero y asígnale un valor de tipo boolean que represente una afirmación verdadera.
var black
black = true
console.log("Is my dog black? " + black)

//Crea una variable falso y asígnale un valor de tipo boolean que represente una afirmación falsa.
var white
white = false
console.log("Is my dog white? " + white)
//Crea una variable nulo y asígnale un valor de tipo null.
var green = null
console.log("Is my dog green? " + green)

//Crea una variable indefinido y asígnale un valor de tipo undefined.


//Crea una variable arreglo y asígnale un arreglo con varios valores de diferentes tipos de datos.
var datosPersonales = [nombre = "Jessica", edad = 28, casado = false, soltero = true, divorciado = null, viudo = undefined]
//Imprime en la consola el valor de la variable número y el tipo de dato que almacena.
console.log(edad + ", it is a " + typeof edad)
//Imprime en la consola el valor de la variable texto y el tipo de dato que almacena.
console.log(nombre + ", it is a " + typeof nombre)
//Imprime en la consola el valor de la variable verdadero y el tipo de dato que almacena.
console.log(soltero + ", it is " + typeof soltero)
//Imprime en la consola el valor de la variable falso y el tipo de dato que almacena.
console.log(casado + ", it is " + typeof casado)
//Imprime en la consola el valor de la variable nulo y el tipo de dato que almacena.
console.log(divorciado + ", it is " + typeof divorciado)
//Imprime en la consola el valor de la variable indefinido y el tipo de dato que almacena.
console.log(viudo + ", it is " + typeof viudo)
//Imprime en la consola el valor de la variable arreglo y el tipo de dato que almacena.
console.log(datosPersonales + ", it is " + typeof datosPersonales)



/*Decisiones en javascript (if,if else, switch)*/

//Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10.
numero = 2
if (numero > 10){
    console.log(`${numero} es mayor a 10`)
}
else if (numero < 10) {
    console.log(`${numero} es menor o igual a 10`)
}

//Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar.

   if (numero%2 == 0){
     console.log("par")
   }else {
     console.log("impar")
   }

//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.

vocales = ["a", "e", "i", "o", "u"]
const LETRA = "c"
if (LETRA.includes(vocales)){ 
       
        console.log("vocal")
    }else{
     console.log("consonante")
}
//Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad.
let edad2 = 20

   if (edad2 >= 18){
        console.log("mayor de edad")
   }else {
        console.log("menor de edad")
   }

//Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola indicando el día de la semana correspondiente.
let dia = 2
if (dia == 1){
     console.log("domingo");
}else if (dia == 2){
     console.log("lunes");
}else if (dia == 3){
     console.log("martes");
}else if (dia == 4){
     console.log("miercoles");
}else if (dia == 5){
     console.log("jueves");
}else if (dia == 6){
     console.log("viernes");
}else if (dia == 7){
     console.log("sabado");
}else {
     console.log("numero invalido");
}
//Funciones

//Escribe una función que tome dos números como argumentos y devuelva su suma.

function suma (num1, num2){
var resultado;
resultado = num1 + num2;
return resultado
}
console.log(suma(1, 2));

//Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar.
function parImpar (numero){
     if (numero%2 == 0){
          return "par"
        }else {
          return "impar"
        }
     }
     console.log(parImpar(3));

//Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos.


//Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo.

//Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades.





//Vectores

//Escribe una función que tome un array de números como argumento y devuelva el número más grande.

//Escribe una función que tome un array de números como argumento y devuelva un array con los números ordenados de menor a mayor.

//Escribe una función que tome dos arrays como argumentos y devuelva un array que contenga los elementos comunes entre ambos.

//Escribe una función que tome un array de strings como argumento y devuelva un nuevo array que contenga los strings convertidos a mayúsculas.

//Escribe una función que tome un array de números como argumento y devuelva un nuevo array que contenga la suma acumulativa de sus elementos.




//Bucles

//Escribe un bucle for que imprima en la consola los números del 1 al 10.

//Escribe un bucle while que imprima en la consola los números del 1 al 5.

//Crea un vector con los números del 1 al 5. Escribe un bucle for que imprima en la consola cada uno de los elementos del vector.

//Crea una función que reciba un número n y devuelva la suma de todos los números del 1 al n. Utiliza un bucle for para calcular la suma y muestra el resultado en la consola.

//Crea una función que reciba un vector y devuelva la suma de todos sus elementos. Utiliza un bucle while para calcular la suma y muestra el resultado en la consola.





//DOM y eventos

//Crea un archivo HTML con un botón y un div vacío. Usa JavaScript para agregar un mensaje al div cuando se hace clic en el botón.

//Crea una función que cambie el color de fondo de un elemento HTML a rojo cuando el mouse se mueve sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el tamaño de fuente de un elemento HTML cuando se presiona una tecla en el teclado. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el contenido de un elemento HTML cuando se hace doble clic sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie la imagen de fondo de un elemento HTML cuando se carga la página. Agrega esta función como un listener de evento para el body del documento.