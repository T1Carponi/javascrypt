/* primera declaracion variable */
// let lala = "andres";
// const EDAD= 15;
// const no se puede modificar el valor, pero let si//
/* ejemplo*/




// condicionales//

/*let edad = prompt("mayor de 18")

if(edad === 18){
    alert("puede entrar")
}else if(edad < 18){
    alert("no puede entrar")
}
*/
// ciclos e iteraciones (loops)//

/*for(let i= 0; i <=10; i++){
    let nombre = prompt("ingrese su nombre");
    let mensaje = `turnos #${i} nombre: ${nombre}`;
    alert(mensaje);
}
*/




// utilizacion while //
/*

let usuario = prompt("ingrese nombre de usuario");

while(usuario != "tomas"){
    alert("nombre usuario incorrecto");
    usuario = prompt("ingrese nombre de usuario");

}

*/

//funciones y parametros//
/*
function calculadora(numeroUno, numeroDos, operacion) {
    switch (operacion) {
      case "+":
       return numeroUno + numeroDos;
        break;
  
      case "-":
        return numeroUno - numeroDos;
        break;
  
      case "*":
        return numeroUno * numeroDos;
        break;
  
      case "/":
        return numeroUno / numeroDos;
        break;
  
      default:
        return "operacion no definida";
        break;
    }
  }
  
  let resultado = calculadora(6, 7, "-");
  console.log(resultado);
  */

  //funciones anonimas y arrowfunction//
  /*
  const suma  = (a,b) => a + b;
  const resta = (a,b) => a - b;
  const iva = x => x * 0.21;
  
  let precio = 1000;
  let descuento = 100;
  
  let nuevoPrecio = resta(suma(precio, iva(precio)), descuento);
                  = resta(suma(1000, iva(1000)), 100);
                  = resta(1000 + 1000 * 0.21, 100);
                  = (1000 + 1000 * 0.21) - 100
                  = 1110;
                  console.log(nuevoPrecio)
  
  */

                  /*
                  let usuario = prompt("ingrese nombre de usuario");

while(usuario != "tomas"){
    alert("nombre usuario incorrecto");
    usuario = prompt("ingrese nombre de usuario");

}
*/

//Funcion constructora con info, util cuando son muchos parametros

/*
function Persona(info){
    this.nombre = info.nombre;
    this.edad = info.edad;
    this.direccion = info.direccion;
    this.colorCabello = info.colorCabello;
    this.colorOjos = info.colorOjos;
}

let persona1 = new Persona({
    nombre: "Damian",
    edad: 34,
    direccion: "Av",
    colorCabello: "Negro",
    colorOjos: "Marron",
});

console.log(persona1.colorCabello);

function Perrito(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

let perrito1 = new Perrito("Firu", 3);
let perrito2 = new Perrito("Max", 4);

console.log(perrito1.nombre, perrito1.edad);
*/
/*
function Producto(img, precio, nombre){
    this.img = img;
    this.precio = precio;
    this.nombre = nombre;
  }
  
  let producto1 = new Producto( 406000, "httpa,sdfhlkasugfojdshf","Monitor sam...");
  
  function Producto(tabla){
    this.img = tabla.img;
    this.precio = tabla.precio;
    this.nombre = tabla.nombre;
  }
  
  let producto2 = new Producto({
    nombre: "Monitor sam...",
    precio: 406000,
    img: "httpa,sdfhlkasugfojdshf",
  })
  */


