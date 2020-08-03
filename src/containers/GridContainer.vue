<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { Component, Prop } from 'vue-property-decorator';

import UiGrid from '~/components/ui-kit/UiGrid/UiGrid.vue';
import UiInput from '~/components/ui-kit/UiInput/UiInput.vue';
import UiIconSearch from '~/components/ui-kit/UiIcons/UiIconSearch.vue';

import { Columns } from '~/interfaces/Grid.ts';

interface DynamicPropsGridContainer {
    params: any; // параметры для запроса данных для таблицы
    columns: Array<Columns>;
    title?: string;
}

@Component({
    components: {
        UiGrid,
        UiInput,
        UiIconSearch,
    },
    computed: {
        ...mapGetters([
            'getRows',
        ]),
    },
    methods: {
        ...mapActions([
            'getGridRows',
        ]),
    },
})
export default class GridContainer extends Vue {
    /**
     * Динамические пропсы
     * @type {DynamicPropsGridContainer}
     */
    @Prop({
        required: true,
    }) readonly dynamicProps!: DynamicPropsGridContainer;

    /**
     * Строка поиска по таблице
     * @type {string}
     */
    searchQuery: string = ''

    async created() {
        await (this as any).getGridRows(this.dynamicProps.params);
    }
}
</script>

<template lang="pug">
    .grid-container
        .head
            .title(v-if="dynamicProps.title") {{ dynamicProps.title }}

            UiInput.search(
                v-model="searchQuery"
                placeholder="Поиск"
            )
                UiIconSearch(
                    slot="icon"
                    :size="28"
                )
        UiGrid(
            :columns="dynamicProps.columns"
            :rows="getRows"
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

    @media (max-width: 1679px) {
        .head {
            padding: 10px 0;
        }
        .title {
            font-size: 20px;
        }
    }
</style>
