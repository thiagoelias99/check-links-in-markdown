import { checkLinks } from "./checkLinks";
export async function showInConsole(list: string | object[], file: string, check: boolean) {
    if (check) {
        if (typeof list === "object") {
            console.log(`File: ${file}`);
            console.log(await checkLinks(list));
        } else {
            console.log(list);
        }
    } else {        
        console.log(`File: ${file}`);
        console.log(list);
    }
}