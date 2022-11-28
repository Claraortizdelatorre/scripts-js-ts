//Escribe una función que acepte un string como argumento y devuelva todas las partes finales de dicha palabra:

function subsets(word) {

for (var i = 1; i < word.length; i++) {
    console.log(word.slice(i, ))
  }
}

// Ejemplo
console.log(subsets("message"));// ["essage", "ssage", "sage", "age", "ge", "e"]