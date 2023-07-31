import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "mini_linkedin_users",
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    img_url: {
        type: String,
    },
});

const Post = mongoose.model("mini_linkedin_posts", postSchema);

export default Post;
