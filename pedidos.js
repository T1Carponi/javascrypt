const carro = new carrito();
const carrito = document.getElementById(`carrito`);
const producto = document.getElementById(`listaDeprodcutos`);
const listaDeprodcutos = document.querySelector(`#lista-carrito tbody`);

cargarEventos();

function cargarEventos(){
    producto.addEventListener(`click`,(e)=>{carro.comprarProducto8(e)})
}