import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import ListItem from "~/interfaces/ListItem.ts";

interface EventStoreState {
    config: any;
}

interface Page {
    name: string,
    to: string,
}

interface Section {
    title: string,
    pages: Array<Page>,
}

// @ts-ignore
import config from '~/config/index.js';

const store = new Vuex.Store({
    state: {
        /**
         * Конфиг проекта
         * @type {Object}
         */
        config: {},
    },

    getters: {
        /**
         * Возвращает конфиг для главного меню
         * @param {EventStoreState} state
         * @return {Array<ListItem>}
         */
        getMainMenu({ config }: EventStoreState): Array<ListItem> {
            return config.mainMenu;
        },

        /**
         * Возвращает список страниц для боковой колонки
         * @param {EventStoreState} state
         * @return {Array<Section>}
         */
        getSections({ config }: EventStoreState): Array<Section> {
            return config.sections.map(({ title, pages } : Section) => ({
                title,
                pages: pages.map(({ name, to } : Page) => ({ name, to }))
            }));
        },
    },

    mutations: {
        /**
         * Записываем полученный конфиг в стейт
         * @param {EventStoreState} state
         * @param {Object} config
         */
        addConfig(state: EventStoreState, config: Object) {
            state.config = config;
        },
    },

    actions: {
        /**
         * В асинхронном режиме получаем конфиг с бэка
         * (в данном случае конфиг читаем из файла)
         * @return {Object}
         */
        async getProjectConfig({ commit }: any) {
            // тут, используя axios, можно реализовать получение конфига с бэка
            // const config = await axios.get(params);

            commit('addConfig', config)
        }
    },
});

export default store;
