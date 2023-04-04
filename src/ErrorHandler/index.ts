import chalk = require("chalk");

export function handleError(error: any, path = "") {
    if (error.code === "ENOENT") {
        console.log(chalk.bgRed.bold(`Specified path not found! "${path}"`));
    } else {
        console.log(chalk.red(error));
    }
}