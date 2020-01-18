module.exports = function paseStringsAsArray(arrayAsString) {

    return arrayAsString.split(',').map(tech => tech.trim());


}