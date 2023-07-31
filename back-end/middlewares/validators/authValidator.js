import { body } from "express-validator";
import commonValidationHandler from "./commonValidationHandler.js";
import userRepository from "../../repositories/userRepository.js";

const registrationValidator = [
    body("name").trim().notEmpty().withMessage("Name must be provided"),
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email must be provided")
        .isEmail()
        .withMessage("Must be a valid email")
        .custom(async (email) => {
            try {
                const exists = await userRepository.isEmailExists(email);
                if (exists) {
                    throw new Error("Email already exists");
                }
            } catch (err) {
                throw new Error(err.message);
            }
        }),
    body("password").trim().notEmpty().withMessage("Password must be provided"),
    commonValidationHandler,
];

const loginValidator = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email must be provided")
        .isEmail()
        .withMessage("Must be a valid email")
        .custom(async (email) => {
            try {
                const exists = await userRepository.isEmailExists(email);
                if (!exists) {
                    throw new Error("Email does not exists");
                }
            } catch (err) {
                throw new Error(err.message);
            }
        }),
    body("password").trim().notEmpty().withMessage("Password must be provided"),
    commonValidationHandler,
];

export default {
    registrationValidator,
    loginValidator,
};
