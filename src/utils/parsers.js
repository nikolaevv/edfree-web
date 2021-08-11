const parseQueryParams = (q) => {
    if (q === "") {
        return "";
    }

    return q.split("&")[0].split("?q=")[1];
};

export {
    parseQueryParams
};