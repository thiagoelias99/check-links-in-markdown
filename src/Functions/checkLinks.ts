export async function checkLinks(arrLinks: object[]) {
    const checked = await Promise.all(
        arrLinks.map(async (element) => {
            try {
                const response = await fetch(Object.values(element)[0]);
                return {
                    [Object.keys(element)[0]]: {
                        URL: Object.values(element)[0],
                        responseCode: response.status
                    }
                };
            }
            catch (error) {
                if (error.cause.code === "ENOTFOUND") {
                    return {
                        [Object.keys(element)[0]]: {
                            URL: Object.values(element)[0],
                            responseCode: 400
                        }
                    };
                } else {
                    return error;
                }
            }
        })
    );
    return checked;
}