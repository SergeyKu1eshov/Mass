//BEGIN
export const swap = (mass) => {
    let len = mass.length;
    len > 1 ? [mass[0], mass[len - 1]] = [mass[len - 1], mass[0]] : null;
    return mass;
}
export default swap;
//END