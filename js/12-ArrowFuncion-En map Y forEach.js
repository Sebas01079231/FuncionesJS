const carrito = [
    {nombre: 'Monitor 20"', precio:500 },
    {nombre: 'televisor', precio:100 },
    {nombre: 'celular', precio:200 },
    {nombre: 'Ryzen', precio:300 },
    {nombre: 'Intel', precio:400 },
    {nombre: 'Teclado', precio:700 },
]

// Sintaxis Arrow funcion en map y forEach
const nuevoArray = carrito.map (producto => console.log(`Nombre: ${producto.nombre} - precio: $${producto.precio}`));
console.log(nuevoArray);

carrito.forEach (producto => console.log(`Nombre: ${producto.nombre} - precio: $${producto.precio}`));








