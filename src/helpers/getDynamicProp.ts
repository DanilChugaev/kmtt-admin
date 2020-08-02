/**
 * Возвращает значение пропсы
 * Приоритет у динамической пропсы
 * @param {any} dynamicProps - динамические пропсы
 * @param {any} prop - исходная пропса
 * @param {string} propName - название пропсы
 * @return {any}
 */
export default function getDynamicProp(dynamicProps: any, prop: any, propName: string): any {
    if (dynamicProps && dynamicProps[propName]) {
        return dynamicProps[propName];
    }

    return prop;
}
