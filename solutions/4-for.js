//BEGIN
export const addPrefix = (mass, pref) => {
    let newMass = [];
    let i;
    for (i = 0; i != mass.length; i++) { newMass.push(`${prefix} ${mass[i]}`); }
    return newMass;
}
export default addPrefix;
//END