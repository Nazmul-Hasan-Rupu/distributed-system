import jwt from "jsonwebtoken";
import config from "../config/config.js";

function generateToken(obj) {
    const token = jwt.sign(obj, config.jwt.secret, {
        expiresIn: config.jwt.expiry,
    });
    return token;
}

function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, config.jwt.secret);
        return decoded;
    } catch (err) {
        return false;
    }
}

export default { generateToken, verifyToken };