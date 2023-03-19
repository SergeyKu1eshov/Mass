//BEGIN
export const calculateAverage = (mass) => {
    if (mass.length == 0) {
        return null;
    }
    let summa = 0;
    for (let e1 of mass) {
        summa += e1;
    }
    return summa / mass.length;
}
export default calculateAverage;
//END