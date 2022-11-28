  /*
  Implementa una función que muestre la media de la clase de forma textual, 
  es decir, siguiendo el sistema de calificación español:*/

  const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
  };


  function printAverage(classResults) {
 
    let califications = Object.values(classResults); //result
    let average = califications.reduce((a, b) => a + b) / califications.length //suma
    
    return printCalification(average);
  }

  function printCalification(result){

    if(result === 10) return "Matricula de honor:" + result;
    else if(result <= 10 && result >= 9) return "Sobresaliente:" + result;
    else if(result >= 7 && result <= 8.99) return "Notable:" + result;
    else return "";

}


console.log(printAverage(eso2o));
