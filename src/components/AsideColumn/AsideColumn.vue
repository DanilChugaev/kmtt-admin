<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import UiList from '~/components/ui-kit/UiList/UiList.vue';
import UiLink from '~/components/ui-kit/UiLink/UiLink.vue';
import AsideColumnHead from "~/components/AsideColumn/AsideColumnHead.vue";

import ListItem from "~/interfaces/ListItem";

@Component({
    components: {
        AsideColumnHead,
        UiList,
        UiLink,
    },
})
export default class AsideColumn extends Vue {
    /**
     * Список элементов для всплывающего меню
     * @type {Array<any>}
     */
    @Prop({
        required: true,
    }) readonly menuItems!: Array<ListItem>;

    /**
     * Список элементов для боковой колонки
     * @type {Array<any>}
     */
    @Prop({
        required: true,
    }) readonly items!: Array<any>;
}
</script>

<template lang="pug">
    .aside-column
        AsideColumnHead(
            :items="menuItems"
        )

        .listing-container
            .listing(
                v-for="list in items"
                :key="list.id"
            )
                h2.title(
                    v-if="list.title"
                ) {{ list.title }}

                UiList.list(
                    v-slot="{ item }"
                    :items="list.listItems"
                )
                    UiLink.link(
                        :to="item.to"
                        :hasDashed="false"
                    ) {{ item.name }}
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';

    .aside-column {
        width: 600px;
        box-sizing: border-box;
        background-color: $ui-kit-color-background;
        border-right: 1px solid $ui-kit-color-aside-border;
    }

    .link {
        font-size: 30px;
        letter-spacing: 0.1px;
        padding: 11px 40px;
        color: $ui-kit-color-main-text;
        font-weight: 400;
        line-height: 1.45;
    }

    .listing-container {
        padding: 33px 0;
        border-top: 2px solid $ui-kit-color-aside-border;
    }

    .listing + .listing {
        margin-top: 48px;
    }

    .list {
        padding: 0;
    }

    .title {
        color: $ui-kit-color-placeholder-text;
        margin-top: 0;
        margin-bottom: 15px;
        padding: 12px 40px 0;
        font-size: 26px;
        letter-spacing: 2.2px;
        text-transform: uppercase;
    }
</style>
