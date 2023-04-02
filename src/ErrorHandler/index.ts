// import chalk from "../../node_modules/chalk/source/index";

export function handleError(error: any) {
    if (error.code === "ENOENT") {
        console.log("O caminho especificado não foi encontrado");
    } else {
        console.log(error);
    }
}