// @ts-ignore
import gridRows from '~/config/gridRows.js';

interface EventStoreState {
    gridRows: Array<any>;
}

export default {
    state: {
        /**
         * Данные для таблицы
         * @type {Array<any>}
         */
        gridRows: [],
    },

    getters: {
        /**
         * Возвращает данные для таблицы
         * @param {EventStoreState} state
         * @return {Array<any>}
         */
        getRows({ gridRows }: EventStoreState): Array<any> {
            // в дальнейшем, можно сделать фильтрацию по заданным столбцам
            // (либо сразу на бэке запрашивать нужные столбцы без лишней фильтрации на фронте)
            return gridRows;
        },
    },

    mutations: {
        /**
         * Записываем полученный данные для таблицы в стейт
         * @param {EventStoreState} state
         * @param {Object} gridRows
         */
        addGridRows(state: EventStoreState, gridRows: Array<any>) {
            state.gridRows = gridRows;
        },
    },

    actions: {
        /**
         * В асинхронном режиме получаем данные для таблицы с бэка
         * (в данном случае конфиг читаем из файла)
         * @return {Object}
         */
        async getGridRows({ commit }: any, params: any) {
            // тут, используя axios, можно реализовать получение конфига с бэка
            // const config = await axios.get(params);
            console.log(params);

            commit('addGridRows', gridRows)
        },
    },
};
