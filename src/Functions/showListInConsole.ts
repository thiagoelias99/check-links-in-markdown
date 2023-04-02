export function showListInConsole(list: string | object[], file: string, check: boolean) {
    if (check) {
        // console.log(await checkLinks(list));
    } else {
        console.log(`File: ${file}`);
        console.log(list);
    }
}