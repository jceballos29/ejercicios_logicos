function toArray(obj) {
    //Implementación.
    let arr = [];
    const keys = Object.keys(obj);
    const values =   Object.values(obj);
    for (let i = 0; i < keys.length; i++) {
        arr.push([keys[i],values[i]])
    }
    return arr;
}


module.exports = toArray;