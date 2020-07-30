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
    items: Array<any> = [
        {
            title: 'Статистика',
            listItems: [
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
            listItems: [
                {
                    name: 'Подписка на еженедельную рассылку',
                    to: '/weekly-newsletter-subscribe',
                },
            ],
        },
        {
            title: 'Списки данных',
            listItems: [
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
    menuItems: Array<ListItem> = [
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
        :items="items"
        :menuItems="menuItems"
    )
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
