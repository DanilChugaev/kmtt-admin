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

import UiPopover from '~/components/ui-kit/UiPopover/UiPopover.vue';
import UiList from '~/components/ui-kit/UiList/UiList.vue';
import UiLink from '~/components/ui-kit/UiLink/UiLink.vue';

import ListItem from "~/interfaces/ListItem.ts";

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
        UiPopover,
        UiList,
        UiLink,
    },
})
export default class AsideColumn extends Vue {
    /**
     * Список элементов для меню во всплывашке
     * @type {Array<ListItem>}
     */
    @Prop({
        required: true,
    }) readonly mainMenu!: Array<ListItem>;

    /**
     * Тут вызываем ранее написанные на фронте функции, которые могут быть вызваны из конфига
     * @param {ListItem} item - элемент списка
     */
    callMethod(item: ListItem): void {
        if (item.method) {
            console.log(`Вызываем метод ${item.method}`);
        }
    }
}
</script>

<template lang="pug">
    .head-container
        UiPopover(
            :isFullWidth="true"
        )
            .head(slot="activator")
                img.head__logo(src="data:image/png;base64,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")
                h1.head__title KMTT admin
                UiIconChevronDown.head__icon(
                    :size="48"
                )

            UiList.menu-list(
                v-slot="{ item }"
                :items="mainMenu"
            )
                UiLink.menu-list__link(
                    :href="item.url"
                    :hasDashed="false"
                    @click="callMethod(item)"
                )
                    component(
                        v-if="item.icon"
                        slot="icon"
                        :size="item.iconSize || 30"
                        :is="item.icon"
                    )
                    | {{ item.name }}
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';

    .head-container {
        padding: 30px 40px;
    }

    .head {
        display: flex;
        align-items: center;
        position: relative;
        box-sizing: border-box;
        width: 100%;

        &__title {
            color: $ui-kit-color-white;
            letter-spacing: -1.2px;
            margin: 0;
        }

        &__logo {
            width: 52px;
            height: 52px;
            margin-right: 20px;
        }

        &__icon {
            position: absolute;
            top: 8px;
            right: -8px;
            margin-left: auto;
            color: $ui-kit-color-placeholder-text;
        }
    }

    .menu-list {
        &__link {
            font-size: 28px;
            letter-spacing: -1.2px;
            padding: 18px 40px;
            color: $ui-kit-color-main-text;
            font-weight: 500;
        }
    }
</style>
