function arrayOfMultiples (num, length) {
    return Array.from({length}, (_,i) => (i+1)*num)
}


module.exports = arrayOfMultiples;