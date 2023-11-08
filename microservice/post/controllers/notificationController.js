import notificationRepository from "../repositories/notificationRepository.js";
import { Response } from "../utils/responseUtils.js"

async function getNotifications(req, res) {
    try {
        const user = req.user;
        const notifications = await notificationRepository.getNotifications(user.id);

        res.json(Response.success("Notifications are retrieved successfully.", notifications));
    } catch (err) {
        console.log(err);
        res.status(500).json(Response.error("Internal Server Error", Response.SERVER_ERROR));
    }
}

export default {
    getNotifications,
};
