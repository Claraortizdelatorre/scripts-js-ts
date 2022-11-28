/*
Dados dos objetos cualesquiera, implementa una función merge que mezcle uno sobre otro. 
El objeto resultante debe ser la mezcla de las propiedades del objeto source sobre las del objeto target.
*/

function clone(source) {
    // Implementation here.
    return Object.assign({}, source);
  }

function merge(source, target) {
    let merged = { ...clone(target), ...clone(source)};
    console.log(merged);
  }
  
  var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
  var b = { name: "Luisa", age: 31, married: true };
  
  // El resultado de mezclar a sobre b sería:
  merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}