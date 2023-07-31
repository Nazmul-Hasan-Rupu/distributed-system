import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "mini_linkedin_users",
        required: true,
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "mini_linkedin_posts",
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    is_read: {
        type: Boolean,
        default: false,
    },
});

const Notification = mongoose.model("mini_linkedin_notifications", notificationSchema);

export default Notification;
