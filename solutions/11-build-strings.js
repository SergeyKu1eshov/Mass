//BEGIN
export const buildDefinitionList = (mass) => {
    return mass.length ? "<dl>" + mass.reduce((a, b) => a + `<dt>${b[0]}</dt><dd>${b[1]}</dd>`, "") + "</dl>" : "";
}
export default buildDefinitionList;
//END