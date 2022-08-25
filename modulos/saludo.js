/*en node para exportar una funcion lo hacemos mediante el objeto module.exports*/
const saludar = (nombre)=>{
    return `Hola ${nombre}`;
}

module.exports = {
    saludar
}