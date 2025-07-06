const numberListGenerator = (num = 10) => {
    return Array.from({ length: num }, (_, i) => i + 1);
};

module.exports = numberListGenerator;
