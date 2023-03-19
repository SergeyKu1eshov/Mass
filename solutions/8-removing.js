//BEGIN
export const getSameParity = (mass) => {
    let chet = mass[0] % 2 ? [-1, 1] : [0];
    return mass.filter(e1 => chet.includes(e1 % 2));
}
export default getSameParity;
//END