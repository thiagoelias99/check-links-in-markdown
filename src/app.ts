import { extractLinks } from "./Functions/extractLinks";
import { showInConsole } from "./Functions/showInConsole";
import { handleError } from "./ErrorHandler/index";
import * as fs from "fs";

const path = process.argv[2];
const isToCheck = process.argv[3] === "check";

run();

async function run() {
    try {
        if (fs.lstatSync(path).isFile()) {
            const list = await extractLinks(path);
            showInConsole(list, path, isToCheck);

        } else if (fs.lstatSync(path).isDirectory()) {
            const files = await fs.promises.readdir(path);
            files.forEach(async (file) => {
                const list = await extractLinks(`${path}/${file}`);
                showInConsole(list, `${path}/${file}`, isToCheck);
            });
        }
    }
    catch (error) {
        handleError(error);
    }
}