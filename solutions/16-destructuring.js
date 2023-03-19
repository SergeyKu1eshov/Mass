//BEGIN
export const getTheNearestLocation = (mass, p = [0, 0]) => {
    if (mass.length == 0) {
        return null;
    }
    return mass.sort((a, b) => {
        let [x2, y2] = b[1], [x1, y1] = a[1], [x0, y0] = p;
        return Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)) -
            Math.sqrt(Math.pow(x2 - x0, 2) + Math.pow(y2 - y0, 2));
    })[0];
}
export default getTheNearestLocation;
//END