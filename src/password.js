const passwordValid = (pass) => {

    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(pass)) {
        return 'Password must not contain Whitespaces.';
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(pass)) {
        return 'Password must have at least one Uppercase Character.';
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(pass)) {
        return 'Password must have at least one Lowercase Character.';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(pass)) {
        return 'Password must contain at least one Digit.';
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(pass)) {
        return 'Password must be 8-16 Characters Long.';
    }

    return true;
}

module.exports = passwordValid;