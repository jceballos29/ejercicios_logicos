function minMax(aNumbs) {
    //Implementación
    aNumbs.sort((a, b) => {return a - b})
    return {min:aNumbs[0], max:aNumbs[aNumbs.length - 1]}
}

module.exports = minMax;