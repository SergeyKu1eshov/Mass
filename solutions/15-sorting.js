//BEGIN
export const bubbleSort = (mass) => {
    let i, j;
    for (i = 0; i != mass.length; i++) {
        for (j = i; j != mass.length; j++) {
            if (mass[i] > mass[j]) {
                [mass[j], mass[i]] = [mass[i], mass[j]];
            }
        }
    }
    return mass;
}
export default bubbleSort;
//END