import multer from 'multer';
import path from "path";
import { v4 as uuidv4 } from 'uuid';
import minioClient from '../config/minioClient.js';
import { Response } from '../utils/responseUtils.js';

function singleFileUploader(name) {
    return async function (req, res, next) {
        const upload = multer();
        upload.single(name)(req, res, (err) => {
            if (err) {
                console.log(err);
                res.status(500).json(Response.error("An error occured while uploading file"));
            } else {
                const file = req.file;
                const file_extension = path.extname(file.originalname);

                const bucketName = "minilinkedin";
                const fileName = uuidv4() + file_extension;

                minioClient.putObject(bucketName, fileName, file.buffer, (err, etag) => {
                    if (err) {
                        console.error('Error uploading file to Minio:', err);
                        res.status(500).json(Response.error("An error occured while saving to minio"));
                    } else {
                        // console.log('File uploaded successfully:', etag);
                        req.body.img_url = `http:localhost:9000/${bucketName}/${fileName}`;
                        next();
                    }
                });
            }
        });
    }
}

function multipleFileUploader() {
    return async function (req, res, next) {

    }
}


export default {
    singleFileUploader,
    multipleFileUploader
}