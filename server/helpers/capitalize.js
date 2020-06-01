function capitalize(str) {
    const firstLetter = str.substring(0, 1).toUpperCase();
    const phrase = str.substring(1);
    return firstLetter + phrase;
}

module.exports = capitalize;