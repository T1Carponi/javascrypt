class carrito{
  comprarProducto8(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
      const producto = e.target.parentElement.parentElement;
      this.leerProducto(producto);
     
    }
  }
}

leerDatosProducto(producto){
  const infoProducto = {
    imagen : producto.querySelector('img')src,
    titulo : producto.querySelector('h4')textContent,
    precio : producto.querySelector('precio')textContent,
    id : producto.querySelector('a').getAttribute('data id'),
    cantidad : 1;

  }
  this.instertarCarrito(infoProducto);


}