export async function checkLinks(arrLinks: object[]) {
    const links = arrLinks.map((links) => Object.values(links).join());

    const checked = await Promise.all(
        links.map(async (url) => {
            try {
                const response = await fetch(url);
                return response.status;
            }
            catch (error) {
                if (error.cause.code === "ENOTFOUND") {
                    return (400);                    
                } else {
                    return error;
                }
            }
        }));
    return checked;
}