import path from "path";
import { fileURLToPath } from "url";

function getFileName(metaUrl) {
    const __filename = fileURLToPath(metaUrl);

    return __filename;
}

/**
 *
 * @param {String} metaUrl import.meta.url
 * @returns dirname
 */
function getDirectoryName(metaUrl) {
    const __dirname = path.dirname(getFileName(metaUrl));

    return __dirname;
}



export default {
    getDirectoryName,
}