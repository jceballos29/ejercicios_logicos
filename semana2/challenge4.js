function landMass(country, landMass) {
    //Implementación
    const TOTAL_LAND_MASS = 148940000
    const mass = (landMass*100)/TOTAL_LAND_MASS
    const percent = parseFloat(mass.toFixed(2))
    return { "percent":percent, "message":`${country} repenseta el ${percent}% de la masa de la tierra`}
}

module.exports = landMass;