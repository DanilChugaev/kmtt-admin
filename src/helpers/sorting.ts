/**
 * Сортирует строки по убыванию/возрастанию значений
 * @param {Array<any>} rows - сортируемые строки
 * @param {string} sortKey - ключ, по которому происходит сортировка
 * @param {number} sortOrder - значение сортировки {-1|1}
 * @return {Array<any>}
 */
export default function sorting(
    rows: Array<any>,
    sortKey: string,
    sortOrder: number,
) {
    return rows.slice().sort((a, b) => {
        const first = a[sortKey].title;
        const second = b[sortKey].title;

        if (first > second) {
            return sortOrder;
        }
        if (first < second) {
            return -1 * sortOrder;
        }

        return 0;
    });
}
