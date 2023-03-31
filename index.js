import chalk from "chalk";
import fs from "fs";

import { checkLinks } from "./checkLinks.js";

function handleError(error) {
    console.log(error);
    throw new Error(chalk.red(`${error.code}: ${error.message}`))
}

async function showListInConsole(list, file, check) {
    if (check) {
        console.log(await checkLinks(list));
    } else {
        console.log(`File: ${file}`)
        console.log(list);
    }
}

function extractLinks(text) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const captures = [...text.matchAll(regex)];

    const results = captures.map((capture) => {
        /* Para usar uma informação de array como chave deve colocar um [] por fora */
        return ({
            [capture[1]]: capture[2],
        })
    })
    return results.length != 0 ? results : "Links not found in file"
}

async function readMyFile(filePath) {
    const encoding = "utf-8";
    return (await fs.promises
        .readFile(filePath, encoding)
        .catch(handleError)
    )
}

// Get param from terminal
const path = process.argv[2];
const isToCheck = process.argv[3] === "--check";

// Verifies if path is a file or directory
if (fs.lstatSync(path).isFile()) {
    const list = extractLinks(await readMyFile(path));
    await showListInConsole(list, path, isToCheck);
} else if (fs.lstatSync(path).isDirectory()) {
    const files = await fs.promises.readdir(path);
    files.forEach(async (file) => {
        const list = extractLinks(
            await readMyFile(`${path}/${file}`)
        );
        await showListInConsole(list, `${path}/${file}`, isToCheck);
    })
}

/* node index.js  ./arquivos/texto.md */
/* node index.js  ./arquivos */




