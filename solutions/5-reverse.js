//BEGIN
export const reverse = (mass) => {
    let i, len = mass.length - 1;
    let len1 = len / 2;
    for (i = 0; i <= len1; i++) {
        [mass[i], mass[len - i]] = [mass[len - i], mass[i]];
    }
    return mass;
}
export default reverse;
//END