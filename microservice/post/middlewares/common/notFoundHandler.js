import { Response } from "../../utils/responseUtils.js";

export default function notFoundHandler(req, res, next) {
    res.status(404).json(Response.error("Not Found", Response.NOT_FOUND));
}