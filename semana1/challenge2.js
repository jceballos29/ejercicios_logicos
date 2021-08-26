const reverseInt = (number) => {
    //Implementación
    if(!Number.isInteger(number)){
        throw new Error("Tipo de dato no admitido.");
    }
    let n = number;
    let arr = []
    let reverse = 0;
    let index = 0;
    let negativo = 1;
    if(n < 0){
    n = n * -1;
    negativo = -1;
    }
    
    while(n !== 0){
    arr.push(n % 10);
    n = Math.floor(n / 10);
    }
    
    index = arr.length - 1;
    
    for(let i = 0; i < arr.length; i++){
    reverse += arr[i]*Math.pow(10,index)
    index--;
    }
    reverse = reverse*negativo
    return reverse;

}

module.exports = {
    reverseInt
}