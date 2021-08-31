
const reverseString = (str) => {
<<<<<<< HEAD
  //Implementación

  let length = str.length
  let s = str;
  let reverse = '';

  if(typeof str !== "string"){
=======
    //Implementación

    let length = str.length
    let s = str;
    let reverse = '';

    if(typeof str !== "string"){
        throw new Error("Error: Tipo de dato o longitud no admitidos.");
    }
    if(length <= 1){
      throw new Error("Error: Tipo de dato o longitud no admitidos.");
    }
    if(length > 15){
>>>>>>> 28cf9def6708f68dd23e3a6315e50fb9de7f20d6
      throw new Error("Error: Tipo de dato o longitud no admitidos.");
  }
  if(length <= 1){
    throw new Error("Error: Tipo de dato o longitud no admitidos.");
  }
  if(length > 15){
    throw new Error("Error: Tipo de dato o longitud no admitidos.");
  }
  let i = s.length-1;
  while(i >= 0){
    reverse += s[i];
    i--;
  }
  return reverse;
}

module.exports = {
<<<<<<< HEAD
  reverseString
}
=======
    reverseString
}
>>>>>>> 28cf9def6708f68dd23e3a6315e50fb9de7f20d6
