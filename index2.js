class anteojoSol {
    constructor (Rayban1,precio,cantidad)[
        this.Rayban1 = Rayban1;
        this.precio = precio;
        this.cantidad = cantidad;
    ]
articulo(){
    this.cantidad = this.cantidad +1
}


}

const array = [];

for(let i = 0; i < 7; i++){
  let modelo = prompt("ingrese el modelo");
  let precio = prompt("ingrese el precio");
  let obj = new Producto(modelo, precio);

  array.push(obj);
}