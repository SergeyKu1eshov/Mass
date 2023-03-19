//BEGIN
export const getSuperSeriesWinner = (mat) => {
    let match = mat.reduce((a, b) => b[0] > b[1] ? a + 1 : b[0] == b[1] ? a : a - 1, 0);
    if (!match) {
        return null;
    }
    return match > 0 ? "canada" : "ussr";
}
export default getSuperSeriesWinner;
//END