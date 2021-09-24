function isEqual(objInput1, objInput2) {
    //Implementación
    const input1 = Object.entries(objInput1).join();
    const input2 = Object.entries(objInput2).join()

    return input1 === input2;
}
const result = isEqual({a: 1, b: 2, c: 0}, {a: 1, b: 2})
console.log(result);

module.exports = isEqual;