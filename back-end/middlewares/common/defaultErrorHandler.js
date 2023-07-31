import { Response } from "../../utils/responseUtils.js";

export default function defaultErrorHandler(err, req, res, next) {
    console.log(err);
    res.status(500).json(Response.error("Internal Server Error", Response.SERVER_ERROR));
}
