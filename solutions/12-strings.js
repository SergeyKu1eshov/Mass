//BEGIN
export const makeCensored = (mess, stopw) => {
    return mess.split(" ").map(e1 => stopw.includes(e1) ? e1 = "$#%!" : e1).join(" ");
}
export default makeCensored;
//END