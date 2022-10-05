/*importar - exportar en node: en node nosotros para exportar una funcion utilizamoc la funcion require()
entonces desestructuramos lo que viene de require que es la funcion que estamos importando
desestructuramos la funcion saludar que viene de requiere(dirreccion de modulo)*/
const saludos = require("./saludos.js");
//ahora saludos es un objeto que contiene las funciones que importamos
//por lo tanto tenemos que acceder al objeto saludos en su metodo funcion saludar
console.log(saludos.saludar("Estuardo"));
//ahora podemos acceder a la segunda fucnion que hay dentro del modulo objeto saludos
console.log(saludos.saludarHolaMundo());