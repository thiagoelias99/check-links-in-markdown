import { checkLinks } from "./checkLinks";

import chalk = require("chalk");

export async function showInConsole(list: string | object[], file: string, check: boolean) {
    if (check) {
        console.log(chalk.green("Este texto está em verde!"));

        if (typeof list === "object") {
            console.log(await checkLinks(list));
        } else {
            console.log(list);
        }
    } else {
        console.log(`File: ${file}`);
        console.log(list);
    }
}