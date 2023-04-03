export function handleError(error) {
    if (error.code === "ENOENT") {
        console.log("O caminho especificado não foi encontrado");
    }
    else {
        console.log(error);
    }
}
