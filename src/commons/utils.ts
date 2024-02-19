export function getLocationQueries(): { [key: string]: string } {
    let urlQueryString = window.location.search;
    let result: { [key: string]: string } = {};

    urlQueryString.replaceAll("?", "").replaceAll("%20", " ").split("&").forEach((value) => {
        const keyAndValue = value.split("=");

        if (keyAndValue[0].length > 0) {
            result[keyAndValue[0]] = keyAndValue[1];
        }
    });


    return result;
}