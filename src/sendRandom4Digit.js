const sendRandom4Digit = () => {
    return Math.floor(1000 + Math.random() * 9000).toString(); // random 4-digit number
};

module.exports = sendRandom4Digit;
