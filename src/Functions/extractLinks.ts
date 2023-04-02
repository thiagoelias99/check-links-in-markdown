import * as fs from "fs";

export async function extractLinks(filePath: string) {
    const fileContent = await readMyFile(filePath);

    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    
    const captures = [...fileContent.matchAll(regex)];

    const results = captures.map((capture) => {
        /* Para usar uma informação de array como chave deve colocar um [] por fora */
        return ({
            [capture[1]]: capture[2],
        });
    });
    return results.length != 0 ? results : "Links not found in file";
}

async function readMyFile(filePath: string) {
    const encoding = "utf-8";
    return (await fs.promises
        .readFile(filePath, encoding)
        // .catch(handleError)
    );
}