function twoSums(numbs, target) {
    //Implementación
    let solution = []
    for (let i = 0; i < numbs.length; i++) {
        const a = numbs[i];
        for (let j = 0; j < numbs.length; j++) {
            const b = numbs[j];
            if(a + b === target && i !== j && solution.length<2){
                solution.push(i)
                solution.push(j)
            }
        }
    }
    return solution
}

twoSums([3,3], 6)

module.exports = twoSums;