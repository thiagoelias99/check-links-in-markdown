import * as fs from "fs";
import chalk = require("chalk");
import { handleError } from "../ErrorHandler";

export async function extractLinks(filePath: string) {
    const fileContent = await readMyFile(filePath);

    if(typeof fileContent === "string"){
        const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
        
        const captures = [...fileContent.matchAll(regex)];
    
        const results = captures.map((capture) => {
            return ({
                [capture[1]]: capture[2],
            });
        });
        return results.length != 0 ? results : chalk.bgYellow.bold(`Links not found in file "${filePath}"\n`);
    }
}

async function readMyFile(filePath: string) {
    const encoding = "utf-8";
    return (await fs.promises
        .readFile(filePath, encoding)
        .catch(handleError)
    );
}