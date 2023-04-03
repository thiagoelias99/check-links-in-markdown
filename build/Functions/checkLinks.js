var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function checkLinks(arrLinks) {
    return __awaiter(this, void 0, void 0, function* () {
        const links = arrLinks.map((links) => Object.values(links).join());
        const checked = yield Promise.all(links.map((url) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(url);
                return response.status;
            }
            catch (error) {
                if (error.cause.code === "ENOTFOUND") {
                    return (400);
                }
                else {
                    return error;
                }
            }
        })));
        return checked;
    });
}
