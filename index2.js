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

let producto = document.getElementsByClassName("card")
console.log(card1[1].innerhtml);
console.log(card1[2].innerhtml);
console.log(card1[3].innerhtml);
console.log(card1[4].innerhtml);
console.log(card1[5].innerhtml);


class Producto{
    constructor(nombre, precio, cantidad){
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  
    vender(){
      this.cantidad = this.cantidad - 1;
    }
  }

  const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
  const Productos = [];
  for (const productos of almacenados);
producto.push(new producto("object"));
for (const producto of productos);

let carrito = []
let carritoenls = localStorage.getItem(`carrito`)
if (carritoenls){
  carrito = carritoenls
}
rendercarrito(carrito)

let btn = 
document.getElementById("btn btn-primary")
btn.addEventListener("click", () => {
  Swal.fire({
    title: 'quieres agregar este producto al carrito?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Si',
    denyButtonText: `No`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
});

fetch('http://127.0.0.1:5500/index.html')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));






