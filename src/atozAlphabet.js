const atozAlphabet = () => {
    return Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)); // A-Z
};

module.exports = atozAlphabet;
