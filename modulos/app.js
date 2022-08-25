/*importar - exportar en node: en node nosotros para exportar una funcion utilizamoc la funcion require()
entonces desestructuramos lo que viene de require que es la funcion que estamos importando
desestructuramos la funcion saludar que viene de requiere(dirreccion de modulo)*/
const {saludar} = require("./saludo.js");
console.log(saludar("Estuardo"));