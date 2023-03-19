//BEGIN
export const getMax = (mass) => {
    if (mass.length == 0) {
        return null;
    }
    let [max, ...rest] = mass;
    return rest.reduce((a, b) => b > a ? a = b : a, max)
}
export default getMax;
//END