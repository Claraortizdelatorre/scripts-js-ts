//Dado un texto cualquiera, invierte el orden de las palabras.

function reverseText(text) {
    return text.split(" ").reverse().join(" ");
  }

  console.log(reverseText("hola que tal"));