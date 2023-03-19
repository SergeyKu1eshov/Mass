//BEGIN
export const calculateSum = (mass) => {
    return mass.reduce((a, b) => !(b % 3) ? a + b : a, 0);
}
export default calculateSum;
//END