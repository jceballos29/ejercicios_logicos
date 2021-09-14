function keysAndValues(objInput) {
    //Implementación
    const keys = Object.keys(objInput).sort();
    const values = keys.map(i => objInput[i])
    
    return [keys, values];
}

module.exports = keysAndValues;