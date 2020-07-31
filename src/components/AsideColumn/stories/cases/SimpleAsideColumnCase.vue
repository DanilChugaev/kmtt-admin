<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import AsideColumn from '~/components/AsideColumn/AsideColumn.vue';

import ListItem from "~/interfaces/ListItem";

@Component({
    components: {
        AsideColumn,
    },
})
export default class SimpleAsideColumnCase extends Vue {
    /**
     * Элементы списка для боковой колонки
     * @type {Array<any>}
     */
    sections: Array<any> = [
        {
            title: 'Статистика',
            pages: [
                {
                    name: 'Публикации',
                    to: '/publications',
                },
                {
                    name: 'Мессенджер',
                    to: '/messenger',
                },
            ],
        },
        {
            pages: [
                {
                    name: 'Подписка на еженедельную рассылку',
                    to: '/weekly-newsletter-subscribe',
                },
            ],
        },
        {
            title: 'Списки данных',
            pages: [
                {
                    name: 'Доступные города',
                    to: '/available-cities',
                },
                {
                    name: 'Заблокированные пользователи',
                    to: '/blocked-users',
                },
                {
                    name: 'Черный список ссылок',
                    to: '/blacklist-links',
                },
                {
                    name: 'Управление пользователями',
                    to: '/user-management',
                },
            ],
        },
    ]

    /**
     * Элементы списка для компонента UiList
     * @type {Array<ListItem>}
     */
    mainMenu: Array<ListItem> = [
        {
            name: 'Основные настройки',
            method: 'mainSettings',
            params: {
                id: '121221',
            },
            icon: 'UiIconSettings',
        },
        {
            name: 'Настроить меню',
            method: 'customizeMenu',
            params: {
                id: '121221',
            },
            icon: 'UiIconMenu',
        },
        {
            name: 'Сообщить о проблеме',
            method: 'reportProblem',
            params: {
                id: '121221',
            },
            icon: 'UiIconWarning',
        },
    ]
}
</script>

<template lang="pug">
    AsideColumn(
        :sections="sections"
        :mainMenu="mainMenu"
    )
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
