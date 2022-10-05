/*en node para exportar una funcion lo hacemos mediante el objeto module.exports*/
const saludar = (nombre)=>{
    return `Hola ${nombre}`;
}
const saludarHolaMundo = () =>{
    return "hola mundo";
}
//exportar varias funciones
module.exports = {
    saludar,
    saludarHolaMundo
}