<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import UiIconSearch from '~/components/ui-kit/UiIcons/UiIconSearch.vue';
import UiIconSettings from '~/components/ui-kit/UiIcons/UiIconSettings.vue';
import UiIconChevronDown from '~/components/ui-kit/UiIcons/UiIconChevronDown.vue';
import UiIconAtSign from '~/components/ui-kit/UiIcons/UiIconAtSign.vue';
import UiIconAction from '~/components/ui-kit/UiIcons/UiIconAction.vue';
import UiIconMenu from '~/components/ui-kit/UiIcons/UiIconMenu.vue';
import UiIconDisc from '~/components/ui-kit/UiIcons/UiIconDisc.vue';
import UiIconCheck from '~/components/ui-kit/UiIcons/UiIconCheck.vue';
import UiIconInfo from '~/components/ui-kit/UiIcons/UiIconInfo.vue';
import UiIconUser from '~/components/ui-kit/UiIcons/UiIconUser.vue';
import UiIconWarning from '~/components/ui-kit/UiIcons/UiIconWarning.vue';
import UiIconList from '~/components/ui-kit/UiIcons/UiIconList.vue';

@Component({
    components: {
        UiIconSearch,
        UiIconSettings,
        UiIconChevronDown,
        UiIconAtSign,
        UiIconAction,
        UiIconMenu,
        UiIconDisc,
        UiIconCheck,
        UiIconInfo,
        UiIconUser,
        UiIconWarning,
        UiIconList,
    },
})
export default class UiGrid extends Vue {
    /** Названия колонок в шапке таблице */
    @Prop({
        required: true,
    }) readonly columns!: Array<any>;

    /** Строки таблицы */
    @Prop({
        required: true,
    }) readonly rows!: Array<any>;

    /**
     * Возвращает стилевые классы для ячеек таблицы
     * @param {any}
     * */
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

        return result;
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
            )
                component.icon(
                    v-if="column.icon"
                    :is="column.icon"
                    :size="34"
                )
                .text {{ column.title }}

        .tr(
            v-for="row in rows"
            :key="row.id"
        )
            .td(
                v-for="cell in row"
                :key="cell.id"
                :class="getCellViewClass(cell)"
            )
                .text {{ cell.title }}
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
        display: table-cell;
        position: relative;
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
        color: $ui-kit-color-placeholder-text;
    }

    .td {
        color: $ui-kit-color-main-text;
    }

    .td + .td,
    .th + .th {
        border-left: $border;
    }
</style>
