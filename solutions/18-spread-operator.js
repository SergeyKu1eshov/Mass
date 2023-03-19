//BEGIN
export const flatten = (mass) => {
    let newa = [];
    for (let el of mass) {
        if (Array.isArray(el))
            newa.push(...el);
        else
            newa.push(el);
    }
    return newa;
}
export default flatten;
//END