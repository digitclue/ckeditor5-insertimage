export const getUrlWithoutQuery = (url) => {
    const queryStartIndex = url.lastIndexOf('?');
    if (queryStartIndex > -1) {
        return url.slice(0, url.lastIndexOf('?'));
    }
    return url;
};
export const isImageUrl = (url) => /\.(jpeg|jpg|gif|png)$/.test(url);
//# sourceMappingURL=utils.js.map