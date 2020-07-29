/**
 * Фильтрует строки по задонному значению
 * @param {Array<any>} rows - сортируемые строки
 * @param {string} searchQuery - строка, по которой происходит поиск
 * @return {Array<any>}
 */
export default function filtration(
    rows: Array<any>,
    searchQuery: string,
) {
    return rows.filter((row) => {
        return Object.keys(row).some((key) => {
            return (
                String(row[key].title)
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            );
        });
    });
}
