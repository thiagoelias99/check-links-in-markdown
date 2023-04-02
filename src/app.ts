/* const path = process.argv[2];
const isToCheck = process.argv[3] === "--check"; */

import * as fs from "fs";
import { extractLinks } from "./Functions/extractLinks";
import { showListInConsole } from "./Functions/showListInConsole";
import { handleError } from "./ErrorHandler/index";

const path = "./arquivos/texto.md";
const isToCheck = true;

const run = async () => {
    try {
        if (fs.lstatSync(path).isFile()) {
            const list = await extractLinks(path);
            showListInConsole(list, path, isToCheck);

        } else if (fs.lstatSync(path).isDirectory()) {
            console.log("Directory");
        }
    }
    catch (error) {
        handleError(error);
    }
};

run();
