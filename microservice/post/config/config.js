import dotenv from "dotenv";
dotenv.config();

export default {
    port: process.env.PORT,
    mongodb: {
        uri: process.env.MONGODB_URI,
    },
    jwt: {
        expiry: process.env.JWT_EXPIRY,
        secret: process.env.JWT_SECRET,
    },
    cookie: {
        secret: process.env.COOKIE_SECRET,
        authCookieName: process.env.AUTH_COOKIE_NAME,
    },
    minio: {
        endPoint: process.env.MINIO_ENDPOINT,
        port: Number(process.env.MINIO_PORT),
        useSSL: false,
        accessKey: process.env.MINIO_ACCESS_KEY,
        secretKey: process.env.MINIO_SECRET_KEY,
    },
};
