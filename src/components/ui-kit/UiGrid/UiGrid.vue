<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import sorting from '~/helpers/sorting.ts';
import filtration from '~/helpers/filtration.ts';

import { Columns } from '~/interfaces/Grid.ts';

@Component({
    components: {
        UiIconSearch: () => import('~/components/ui-kit/UiIcons/UiIconSearch.vue'),
        UiIconSettings: () => import('~/components/ui-kit/UiIcons/UiIconSettings.vue'),
        UiIconChevronDown: () => import('~/components/ui-kit/UiIcons/UiIconChevronDown.vue'),
        UiIconAtSign: () => import('~/components/ui-kit/UiIcons/UiIconAtSign.vue'),
        UiIconAction: () => import('~/components/ui-kit/UiIcons/UiIconAction.vue'),
        UiIconMenu: () => import('~/components/ui-kit/UiIcons/UiIconMenu.vue'),
        UiIconDisc: () => import('~/components/ui-kit/UiIcons/UiIconDisc.vue'),
        UiIconCheck: () => import('~/components/ui-kit/UiIcons/UiIconCheck.vue'),
        UiIconInfo: () => import('~/components/ui-kit/UiIcons/UiIconInfo.vue'),
        UiIconUser: () => import('~/components/ui-kit/UiIcons/UiIconUser.vue'),
        UiIconWarning: () => import('~/components/ui-kit/UiIcons/UiIconWarning.vue'),
        UiIconList: () => import('~/components/ui-kit/UiIcons/UiIconList.vue'),
        UiLink: () => import('~/components/ui-kit/UiLink/UiLink.vue'),
        UiGridActionContainer: () => import('./UiGridActionContainer.vue'),
    },
})
export default class UiGrid extends Vue {
    /**
     * Названия колонок в шапке таблице
     * @type {Array<Columns>}
     */
    @Prop({
        required: true,
    }) readonly columns!: Array<Columns>;

    /**
     * Строки таблицы
     * @type {Array<any>}
     */
    @Prop({
        required: true,
    }) readonly rows!: Array<any>;

    /**
     * Строки поиска в таблице
     * @type {string}
     */
    @Prop({
        default: '',
    }) readonly searchQuery!: string;

    /**
     * Ключ столбца, по которому происходит сортировка в таблице
     * @type {string}
     */
    sortKey: string = ''

    /**
     * Значений ключей сортировки
     * @type {object}
     */
    sortOrders: object = {}

    created() {
        const sortOrders = {};
        this.columns.forEach((column) => {
            //@ts-ignore
            sortOrders[column.title] = 1;
        });

        this.sortOrders = Object.assign({}, this.sortOrders, sortOrders);
    }

    /**
     * Возвращает список отсортированных строк в таблице
     * @return {Array<any>}
     */
    get filteredRows(): Array<any> {
        const sortKey = this.sortKey;
        const searchQuery = this.searchQuery;
        //@ts-ignore
        const sortOrder = this.sortOrders[sortKey] || 1;
        let rows = this.rows;

        if (searchQuery) {
            rows = filtration(rows, searchQuery);
        }

        if (sortKey) {
            rows = sorting(rows, sortKey, sortOrder);
        }

        return rows;
    }

    /**
     * Возвращает стилевые классы для ячеек таблицы
     * @param {any} item
     * @return {Array<string>}
     */
    getCellViewClass(item: any): Array<string> {
        const result = [];

        if (item.position) {
            result.push(`_${item.position}`);
        } else {
            result.push(`_left`);
        }

        if (item.icon) {
            result.push(`_has-icon`);
        }

        if (item.title == this.sortKey) {
            result.push(`_is-active-sort`);
        }

        return result;
    }

    /**
     * Устанавливает по какому ключу сортировать строки таблицы
     * @param {string} key
     */
    sortByKey(key: string) {
        this.sortKey = key;
        //@ts-ignore
        this.sortOrders[key] = this.sortOrders[key] * -1;
    }
}
</script>

<template lang="pug">
    .table
        .tr
            .th(
                v-for="column in columns"
                :key="column.id"
                :class="getCellViewClass(column)"
                @click="sortByKey(column.title)"
            )
                component.icon(
                    v-if="column.icon"
                    :is="column.icon"
                    :size="34"
                )

                .text {{ column.title }}

                UiIconChevronDown.sorting(
                    slot="icon"
                    :size="28"
                    :class="sortOrders[column.title] > 0 ? '_dec' : '_inc'"
                )

        .tr(
            v-for="row in filteredRows"
            :key="row.id"
        )
            .td(
                v-for="cell in row"
                :key="cell.id"
                :class="getCellViewClass(cell)"
            )
                UiGridActionContainer.action-container(
                    v-if="cell.action"
                    :cell="cell"
                )

                UiLink(
                    v-if="cell.to || cell.href"
                    :to="cell.to"
                    :href="cell.href"
                    :target="cell.target || ''"
                ) {{ cell.title }}

                .text(
                    v-else
                ) {{ cell.title }}
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
    @import '~/components/ui-kit/styles/typography.scss';

    $border: 2px solid $ui-kit-color-border;

    .table {
        display: table;
        width: 100%;
        border-collapse: collapse;
    }

    .tr {
        display: table-row;
        border-top: $border;
        border-bottom: $border;
    }

    .td,
    .th {
        @include ui-kit-typography;

        display: table-cell;
        padding: 19px 20px;
        vertical-align: middle;

        .icon {
            position: absolute;
            left: 17px;
            top: 18px;
        }

        .text {
            font-size: 28px;
        }

        &._left {
            text-align: left;
        }

        &._center {
            text-align: center;
        }

        &._right {
            text-align: right;
        }

        &._has-icon {
            padding-left: 62px;
        }
    }

    .th {
        padding-right: 42px;
        color: $ui-kit-color-placeholder-text;
        cursor: pointer;
        user-select: none;
        position: relative;

        &:hover {
            .sorting {
                visibility: visible;

                &._inc {
                    transform: rotate(0);
                }
                &._dec {
                    transform: rotate(180deg);
                }
            }
        }

        &._is-active-sort {
            color: $ui-kit-color-main-text;

            .sorting {
                color: $ui-kit-color-main-text;
            }
        }
    }

    .td {
        color: $ui-kit-color-main-text;
    }

    .td + .td,
    .th + .th {
        border-left: $border;
    }

    .sorting {
        position: absolute;
        top: 24px;
        right: 15px;
        visibility: hidden;
        color: $ui-kit-color-placeholder-text;
    }
</style>
