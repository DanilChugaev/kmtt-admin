import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import ListItem from "~/interfaces/ListItem.ts";
import Page from "~/interfaces/Page.ts";
import Section from "~/interfaces/Section.ts";
import UiComponent from '~/interfaces/UiComponent.ts';

interface EventStoreState {
    config: any;
    sectionTitle: string;
    mainTitle: string;
    pageId: string;
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

        /**
         * Заголовок секции на странице
         * @type {string}
         */
        sectionTitle: '',

        /**
         * Главный заголовок на странице
         * @type {string}
         */
        mainTitle: '',

        /**
         * ID страницы
         * @type {string}
         */
        pageId: '',
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
                pages: pages.map(({ name, to, id } : Page) => ({ name, to, id }))
            }));
        },

        /**
         * Возвращает список компонентов для выбранной страницы
         * @param {EventStoreState} state
         * @return {Array<UiComponent> | undefined}
         */
        getComponentsForPage({ config, pageId }: EventStoreState): Array<UiComponent> | undefined {
            let components;

            config.sections.some((section : Section) => {
                const [ result ] = section.pages.filter((page: Page) => {
                    return page.id === pageId;
                })

                if (result) {
                    components = result.components;
                    return true;
                }
            });

            return components;
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

        /**
         * Устанавливаем заголовок секции на странице
         * @param {EventStoreState} state
         * @param {string} title
         */
        setSectionTitle(state: EventStoreState, title: string) {
            state.sectionTitle = title;
        },

        /**
         * Устанавливаем главный заголовок на странице
         * @param {EventStoreState} state
         * @param {string} title
         */
        setMainTitle(state: EventStoreState, title: string) {
            state.mainTitle = title;
        },

        /**
         * Устанавливаем ID страницы
         * @param {EventStoreState} state
         * @param {string} id
         */
        setPageId(state: EventStoreState, id: string) {
            state.pageId = id;
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
        },
    },
});

export default store;
