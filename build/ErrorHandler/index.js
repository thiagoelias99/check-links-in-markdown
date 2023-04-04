"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
function handleError(error) {
    if (error.code === "ENOENT") {
        console.log("O caminho especificado não foi encontrado");
    }
    else {
        console.log(error);
    }
}
exports.handleError = handleError;
