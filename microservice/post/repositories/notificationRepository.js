import Notification from "../models/Notification.js";

async function createNotification(notification) {
    const newNotification = new Notification(notification);
    await newNotification.save();
    return newNotification;
}

async function createMultipleNotification(notifications) {
    await Notification.insertMany(notifications);
}

async function getNotifications(user_id) {
    const notifications = await Notification.find();
    return notifications;
}

async function deleteOldNotifications() {
    const maxNotificationCount = 10;

    try {
        const notificationCount = await Notification.countDocuments();

        if (notificationCount > maxNotificationCount) {
            const oldestNotifications = await Notification.find({})
                .sort({ _id: 1 })
                .limit(notificationCount - maxNotificationCount);


            // Delete the oldest notifications
            await Notification.deleteMany({
                _id: { $in: oldestNotifications.map((notification) => notification._id) },
            });

            console.log("Deleted old notifications successfully.");
        } else {
            console.log("No need to delete old notifications.");
        }
    } catch (error) {
        console.error("Error deleting old notifications:", error);
    }
}

export default {
    createNotification,
    createMultipleNotification,
    getNotifications,
    deleteOldNotifications,
};
