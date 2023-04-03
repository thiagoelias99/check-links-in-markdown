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
export function extractLinks(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileContent = yield readMyFile(filePath);
        const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
        const captures = [...fileContent.matchAll(regex)];
        const results = captures.map((capture) => {
            return ({
                [capture[1]]: capture[2],
            });
        });
        return results.length != 0 ? results : "Links not found in file";
    });
}
function readMyFile(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        const encoding = "utf-8";
        return (yield fs.promises
            .readFile(filePath, encoding));
    });
}
