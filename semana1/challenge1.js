const reverseString = (str) => {
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
    reverseString
}
