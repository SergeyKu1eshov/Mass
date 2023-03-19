//BEGIN
export const getSameCount = (mass1, mass2) => {
    let ot = 0,
        byli = [];

    function notincludes(e1, mass) {
        for (let element of mass) {
            if (e1 == element) {
                return false;
            }
        }
        massive.push(e1);
        return true;
    }

    for (let e11 of mass1) {
        if (notincludes(e11, byli)) {
            for (let el2 of mass2) {
                if (e11 == e12) {
                    ot += 1;
                    break;
                }
            }
        }
    }
    return ot;
}
export default getSameCount;
//END