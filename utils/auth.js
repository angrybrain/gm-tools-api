const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

async function hashPassword(password) {
    const saltRounds = 12;
    return bcrypt.hash(password, saltRounds);
}

async function comparePassword(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
}

async function createToken(payload, expiresIn) {
    return jwt.sign({
        data: payload,
    }, process.env.JWT_SECRET, { expiresIn });
}

function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

function verfiyToken(req, res, next) {
    jwt.verify(req.token, process.env.JWT_SECRET, { ignoreExpiration: false }, (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            req.authData = authData;
            next();
        }
    })
}


module.exports = { hashPassword, comparePassword, createToken, ensureToken, verfiyToken }