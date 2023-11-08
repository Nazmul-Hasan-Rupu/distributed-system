import jwtUtils from "../utils/jwtUtils.js";
import { Response } from "../utils/responseUtils.js";
import config from "../config/config.js";

/**
 * Puts req.user = user
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export async function checkAuthentication(req, res, next) {
    try {
        const bearerToken = req.headers.authorization;
        const authToken = bearerToken ? bearerToken.split(" ")[1] : null;
        const signedCookie = req.signedCookies[config.cookie.authCookieName];

        const token = signedCookie || authToken;

        if (!token) {
            res.status(401).json(Response.error("Authentication failed", Response.UNAUTHORIZED));
            return;
        }

        const decoded = jwtUtils.verifyToken(token);

        if (!decoded) {
            res.status(401).json(Response.error("Authentication failed", Response.UNAUTHORIZED));
            return;
        }

        // put decoded token into req.user
        req.user = decoded;

        next();
    } catch (err) {
        console.log(err);
        res.status(400).json(Response.error("Internal Server Error", Response.SERVER_ERROR));
    }
}
export default {
    checkAuthentication,
};
