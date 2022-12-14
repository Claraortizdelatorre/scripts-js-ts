/*
Crea una función que reciba una frase en formato string y devuelva la palabra más larga. 
En caso de haber varias con longitud máxima que devuelva siempre la primera. 
Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios
*/

function biggestWord(phrase) {
    var arrayWord = phrase.split(" ");
    var biggestMoreWord = arrayWord[0]; 

    arrayWord.forEach(function(word) {
        if(word.length > biggestMoreWord.length){
            biggestMoreWord = word;
        } 
    })
    return biggestMoreWord;
  }
  
  console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
  console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"