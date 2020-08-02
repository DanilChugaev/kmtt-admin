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
    }) readonly mainMenu!: Array<ListItem>;

    /**
     * Список элементов для боковой колонки
     * @type {Array<any>}
     */
    @Prop({
        required: true,
    }) readonly sections!: Array<any>;

    /**
     * Скрывать ли скролл в списке со страницами
     * @type {boolean}
     */
    isVisibleScroll: boolean = true

    /**
     * Навешиваем классы состояний
     * @return {Array<string>}
     */
    get viewClass(): Array<string> {
        const result = [];

        if (this.isVisibleScroll) {
            result.push('_is-visible-scroll');
        }

        return result;
    }

    /** Обработка наведения мыши на элемент */
    mouseOver(): void {
        this.isVisibleScroll = true;
    }

    /** Обработка покидания мыши с элемента */
    mouseLeave(): void {
        this.isVisibleScroll = false;
    }
}
</script>

<template lang="pug">
    .aside-column
        AsideColumnHead(
            :mainMenu="mainMenu"
        )

        .listing-container(
            :class="viewClass"
            @mouseover="mouseOver"
            @mouseleave="mouseLeave"
        )
            .listing(
                v-for="section in sections"
                :key="section.id"
            )
                h2.title(
                    v-if="section.title"
                ) {{ section.title }}

                UiList.list(
                    v-slot="{ item }"
                    :items="section.pages"
                )
                    UiLink.link(
                        :to="item.to"
                        :hasDashed="false"
                    ) {{ item.name }}
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
    @import '~/components/ui-kit/styles/typography.scss';

    .aside-column {
        @include ui-kit-typography;

        display: flex;
        flex-direction: column;
        width: 600px;
        height: 100%;
        box-sizing: border-box;
        background-color: $ui-kit-color-background;
        border-right: 1px solid $ui-kit-color-aside-border;
        overflow: hidden;
    }

    .link {
        font-size: 30px;
        letter-spacing: 0.1px;
        padding: 11px 40px;
        color: $ui-kit-color-main-text;
        font-weight: 400;
        line-height: 1.45;

        &.router-link-active {
            background-color: $ui-kit-color-background-hover;
        }
    }

    .listing-container {
        padding: 33px 0;
        border-top: 2px solid $ui-kit-color-aside-border;
        overflow: hidden;

        &._is-visible-scroll {
             overflow-y: auto;
        }
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
