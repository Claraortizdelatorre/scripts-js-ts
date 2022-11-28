/*
Empleando el concepto de closure, emula el comportamiento de 2 dados.

Utiliza un closure para almacenar el resultado de tirar 2 dados, y encapsula junto a estos datos, 
métodos que implementen la siguiente funcionalidad:

Hacer reset, poner a undefined o null ambos resultados.
Tirar los dados. TIP: Usa Math.random() para tiradas aleatorias.
Imprimir el resultado por consola.
*/

const result = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function play(){

    for(let i =0; i > 1; i++){
       result +=  getRandomInt(1, 6)
    }

    return console.log("La suma de los dados es -> ", result);
}

play();