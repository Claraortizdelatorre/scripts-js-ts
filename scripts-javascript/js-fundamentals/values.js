//Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto

function values(obj) {
 return Object.values(obj)
}

// Ejemplo:
console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]