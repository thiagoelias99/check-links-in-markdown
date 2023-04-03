var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as fs from "fs";
import { extractLinks } from "./Functions/extractLinks";
import { showListInConsole } from "./Functions/showListInConsole";
import { handleError } from "./ErrorHandler/index";
const path = "./arquivos/texto.md";
const isToCheck = true;
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (fs.lstatSync(path).isFile()) {
            const list = yield extractLinks(path);
            showListInConsole(list, path, isToCheck);
        }
        else if (fs.lstatSync(path).isDirectory()) {
            console.log("Directory");
        }
    }
    catch (error) {
        handleError(error);
    }
});
run();
