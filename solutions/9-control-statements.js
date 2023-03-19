//BEGIN
export const getTotalAmount = (mass, val) => {
    return mass.map(e1 => e1.split(" ")).reduce((a, b) => b[0] == val ? a + Number(b[1]) : a, 0);
}
export default getTotalAmount;
//END