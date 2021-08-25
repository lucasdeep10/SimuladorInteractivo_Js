const suma  = (a,b,c) => a + b + c;
const iva = x => x * 0.21;
let precioProducto1 = Number(prompt("ingrese el precio del primer producto")); 
let precioProducto2 = Number(prompt("ingrese el precio del segundo producto"));

let precioFinal = suma(precioProducto1, precioProducto2, iva(precioProducto1, precioProducto2));
 
console.log("el monto total a abonar es $" + precioFinal);


