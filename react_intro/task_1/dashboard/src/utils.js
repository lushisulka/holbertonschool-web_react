export const getCurrentYear = () => {
    const dateTime = new Date();
    return dateTime.getFullYear();
}
export const getFooterCopy = (isIndex) => {
    if (isIndex) {
        const str = "<strong>Holberton School</strong>";
        return <span dangerouslySetInnerHTML={{ __html: str }} />;
    } else {
        const str = "<strong>Holberton School main dashboard</strong>";
        return <span dangerouslySetInnerHTML={{ __html: str }} />;
    }
}
export default { getCurrentYear, getFooterCopy };