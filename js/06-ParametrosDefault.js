function persona(nombre, apellido = '') {//parametros 
    console.log(`Hola ${nombre} ${apellido}`);
}

persona('Sebastian');



//parametros por default
function persona2(nombre = 'Desconocido', apellido = '') {//parametros 
    console.log(`Hola ${nombre} ${apellido}`);
}

persona2();