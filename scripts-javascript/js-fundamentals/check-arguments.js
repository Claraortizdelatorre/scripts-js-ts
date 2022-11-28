
//TIP: Piensa en el operador ternario y también en el operador OR.
//TIP: Puedes suponer que input es siempre de tipo string, incluyendo null o undefined. 


function f(input) {
    let result = input || (input === undefined) ? "Unknown": "";
    return result;
  }