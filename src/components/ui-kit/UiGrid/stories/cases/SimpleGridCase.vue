<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiGrid from '~/components/ui-kit/UiGrid/UiGrid.vue';

import { Columns } from '~/interfaces/Grid.ts';

@Component({
    components: {
        UiGrid,
    },
})
export default class SimpleGridCase extends Vue {
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
    UiGrid(
        :columns="columns"
        :rows="rows"
    )
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
