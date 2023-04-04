import { checkLinks } from "./checkLinks";
export async function showInConsole(list: string | object[], file: string, check: boolean) {
    if (check) {
        if (typeof list === "object") {
            const result = (await checkLinks(list));
            console.log(`File: ${file}`);
            console.log(result);
        } else {
            console.log(list);
        }
    } else {        
        console.log(`File: ${file}`);
        console.log(list);
    }
}