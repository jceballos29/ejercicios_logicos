function divisibleByLeft(n) {
    //Implementación
    let output = [false]
    number = n.toString().split('').map(x => parseInt(x))
    for (let i = 1; i < number.length; i++) {
        if(number[i] % number[i-1] === 0){
            output.push(true)
        }else {
            output.push(false)
        }
    }
    return output
}


module.exports = divisibleByLeft;