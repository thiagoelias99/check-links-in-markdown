import { extractLinks } from "./Functions/extractLinks";
import { showInConsole } from "./Functions/showInConsole";
import { handleError } from "./ErrorHandler/index";
import * as fs from "fs";

const path = "./arquivos/texto.md";
const isToCheck = true;
/* const path = process.argv[2];
const isToCheck = process.argv[3] === "--check"; */

const run = async () => {
    try {
        if (fs.lstatSync(path).isFile()) {
            const list = await extractLinks(path);
            showInConsole(list, path, isToCheck);

        } else if (fs.lstatSync(path).isDirectory()) {
            console.log("Directory");
        }
    }
    catch (error) {
        handleError(error);
    }
};

run();
