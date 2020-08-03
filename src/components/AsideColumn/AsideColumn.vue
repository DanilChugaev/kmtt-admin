<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import UiButton from '~/components/ui-kit/UiButton/UiButton.vue';
import UiList from '~/components/ui-kit/UiList/UiList.vue';
import UiLink from '~/components/ui-kit/UiLink/UiLink.vue';
import UiIconLayers from '~/components/ui-kit/UiIcons/UiIconLayers.vue';
import UiIconArrowLeft from '~/components/ui-kit/UiIcons/UiIconArrowLeft.vue';
import AsideColumnHead from "~/components/AsideColumn/AsideColumnHead.vue";

import ListItem from "~/interfaces/ListItem.ts";
import Page from "~/interfaces/Page.ts";
import Section from "~/interfaces/Section.ts";

@Component({
    components: {
        AsideColumnHead,
        UiButton,
        UiList,
        UiLink,
        UiIconLayers,
        UiIconArrowLeft,
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
     * Видна ли боковая колонка
     * @type {boolean}
     */
    isVisible: boolean = false

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

    /**
     * Возвращает урл маршрута с гет параметрами
     * @param {Section} section
     * @param {Page} page
     * @return {string}
     */
    generateRouteParams(section: Section, page: Page): any {
        return `${page.to || '/abstract-page/'}?id=${page.id}&section=${section.title}&name=${page.name}`;
    }
}
</script>

<template lang="pug">
    .aside-column(
        :class="{ '_is-visible': isVisible }"
    )
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
                :class="{ '_has-title': Boolean(section.title) }"
            )
                h2.title(
                    v-if="section.title"
                ) {{ section.title }}

                UiList.list(
                    v-slot="{ item }"
                    :items="section.pages"
                )
                    UiLink.link(
                        :to="generateRouteParams(section, item)"
                        :hasDashed="false"
                    ) {{ item.name }}

            UiLink.link._component-list(
                to="/dummy"
                :hasDashed="false"
                :iconPositionLeft="40"
            )
                UiIconLayers(
                    size="38"
                    slot="icon"
                )
                | Библиотека компонентов

        UiButton.close-button(
            :class="{ '_is-visible': isVisible }"
            @click="isVisible = !isVisible"
        )
            UiIconArrowLeft.icon(
                slot="icon"
                :size="30"
            )
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
    @import '~/components/ui-kit/styles/typography.scss';

    .aside-column {
        @include ui-kit-typography;

        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 600px;
        height: 100%;
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

        &.router-link-exact-active {
            background-color: $ui-kit-color-background-hover;
        }

        &._component-list {
            margin-top: 40px;
            letter-spacing: -1px;
            font-weight: 500;
            padding-left: 98px;

            &:hover {
                background-color: $ui-kit-color-background-hover;
            }
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
        margin-top: 40px;

        &._has-title {
            margin-top: 48px;
        }
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

    .close-button {
        display: none;
        position: absolute;
        padding: 5px !important;
        top: 26px;
        right: -35px;
        color: $ui-kit-color-main-text;
        z-index: -1;
        background-color: transparent !important;
        border: 1px solid $ui-kit-color-main-text;

        &:hover {
            background-color: transparent !important;
        }

        .icon {
            transform: rotate(180deg);
        }

        &._is-visible {
            .icon {
                transform: rotate(0);
            }
        }
    }

    @media (max-width: 1679px) {
        .aside-column {
            max-width: 400px;
        }

        .link {
            font-size: 22px;
            padding: 7px 40px;
        }

        .title {
            font-size: 18px;
            padding: 7px 40px;
        }
    }

    @media (max-width: 1365px) {
        .aside-column {
            position: absolute;
            z-index: 10;
            transform: translateX(-100%);

            &._is-visible {
                transform: translateX(0);
            }
        }

        .close-button {
            display: block;
        }
    }
</style>
