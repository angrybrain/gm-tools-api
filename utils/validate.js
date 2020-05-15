function password(password) {
    let isValid;
    switch (password) {
        case null:
            isValid = false;
        case undefined:
            isValid = false;
        default:
            isValid = true;
    }
    return valid;
}

function login(login) {
    let isValid;
    switch (login) {
        case null:
            isValid = false;
        case undefined:
            isValid = false;
        default:
            isValid = true;
    }
    return valid;
}

module.exports = { login, password }