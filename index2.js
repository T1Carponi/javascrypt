const productos = [
    {nombre: 'cremaCorporal', precio: 1500},
    {nombre: 'sahumerio', precio: 800},
    {nombre: 'perfume', precio: 5000},
    {nombre: 'aceites', precio: 2500},
]
 const existe = productos.some(producto => producto.nombre === "cremaCorporal,sahumerio,perfume,aceites")
const resultado = productos.filter((el) => el.nombre.includes(''))
const resultado2 = productos.filter((el) => el.precio < 4000)
 
console.log(existe)
console.log(resultado)
console.log(resultado2) 