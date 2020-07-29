<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiGrid from '~/components/ui-kit/UiGrid/UiGrid.vue';
import UiInput from '~/components/ui-kit/UiInput/UiInput.vue';
import UiIconSearch from '~/components/ui-kit/UiIcons/UiIconSearch.vue';

import { Columns } from '~/interfaces/Grid.ts';

@Component({
    components: {
        UiGrid,
        UiInput,
        UiIconSearch,
    },
})
export default class SearchGridCase extends Vue {
    searchQuery: string = ''

    columns: Array<Columns> = [
        { title: 'ID', icon: 'UiIconList' },
        { title: 'Имя', icon: 'UiIconUser' },
        { title: 'Email', icon: 'UiIconAtSign' },
        { title: 'Статус', icon: 'UiIconInfo' },
        { title: 'Действия', icon: 'UiIconDisc' },
    ]

    rows: Array<any> = [
        {
            'ID': { title: '56723' },
            'Имя': { title: 'Alex Stone' },
            'Email': { title: 'alexstone.greatsoul@gmail.com' },
            'Статус': { title: '✅ Активен' },
            'Действия': { title: 'Действие', position: 'center' },
        },
        {
            'ID': { title: '56723' },
            'Имя': { title: 'Alex Stone' },
            'Email': { title: 'alexstone.greatsoul@gmail.com' },
            'Статус': { title: '✅ Активен' },
            'Действия': { title: 'Действие', position: 'center' },
        },
        {
            'ID': { title: '789' },
            'Имя': { title: 'Bob Stone' },
            'Email': { title: 'bobstone.greatsoul@gmail.com' },
            'Статус': { title: 'Неактивен' },
            'Действия': { title: 'Действие', position: 'center' },
        },
    ]
}
</script>

<template lang="pug">
    .dark
        p Таблица с поиском по любому полю

        .grid-container
            .head
                .title Список пользователей

                UiInput.search(
                    v-model="searchQuery"
                    placeholder="Поиск"
                )
                    UiIconSearch(
                        slot="icon"
                        :size="28"
                    )
            UiGrid(
                :columns="columns"
                :rows="rows"
                :searchQuery="searchQuery"
            )
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';

    .head {
        display: flex;
        align-items: center;
        padding: 15px 0;
    }

    .title {
        font-size: 30px;
        font-weight: 600;
        color: $ui-kit-color-main-text;
        margin-right: auto;
    }

    .search {
        width: 410px;
        margin-left: auto;
    }
</style>
