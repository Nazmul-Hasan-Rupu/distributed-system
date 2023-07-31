import User from "../models/User.js";

async function createUser(user) {
    const newUser = new User(user);
    try {
        await newUser.save();
        return true;
    } catch (err) {
        if(err.code == 11000) {
            return false;
        }
        return false;
    }
}

async function isEmailExists(email) {
    try {
        const existedUser = await User.findOne({ email }).select("email");
        if (existedUser) return true;
        else false;
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred while verifying email");
    }
}

async function getUserByEmail(email) {
    try {
        const existedUser = await User.findOne({ email });
        return existedUser;
    } catch (err) {
        console.log(err);
        throw new Error("An error occurred getting user information");
    }
}

async function findFriends(user_id) {
    try {
        const users = await User.find({ _id: { $ne: user_id } });
        return users;
    } catch (err) {
        console.log(err);
        throw new Error("An error occured");
    }
}

export default {
    createUser,
    isEmailExists,
    getUserByEmail,
    findFriends,
};
