/*
Suponiendo objetos sin anidamiento y con propiedades primitivas, construye una función que 
compare el contenido de 2 objetos.
*/

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

function isEqual(a, b) {
      return JSON.stringify(a) === JSON.stringify(b)
 
}

console.log(isEqual(user, clonedUser)); // true