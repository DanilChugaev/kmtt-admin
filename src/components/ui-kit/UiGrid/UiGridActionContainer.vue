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

import UiLink from '~/components/ui-kit/UiLink/UiLink.vue';
import UiList from '~/components/ui-kit/UiList/UiList.vue';
import UiPopover from '~/components/ui-kit/UiPopover/UiPopover.vue';

import ListItem from '~/interfaces/ListItem.ts';

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
        UiLink,
        UiList,
        UiPopover,
    },
})
export default class UiGridActionContainer extends Vue {
    /**
     * Данные у ячейки в таблице
     * @type {Object}
     */
    @Prop({
        required: true,
    }) readonly cell!: Object;

    /**
     * Тут вызываем ранее написанные на фронте функции, которые могут быть вызваны из конфига
     * @param {ListItem} item - элемент списка
     */
    callMethod(item: ListItem): void {
        if (item.method) {
            //@ts-ignore
            console.log(`Вызываем метод ${item.method} c параметрами: ${Object.keys(item.params)}`);
        }
    }
}
</script>

<template lang="pug">
    .action-container
        UiPopover
            component.action.activator(
                slot="activator"
                :is="cell.action.icon"
                :size="48"
            )

            UiList(
                v-slot="{ item }"
                :items="cell.action.actionList"
            )
                UiLink.link(
                    :href="item.url"
                    :hasDashed="false"
                    @click="callMethod(item)"
                )
                    | {{ item.name }}
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';

    .action {
        cursor: pointer;
    }

    .link {
        font-size: 28px;
        letter-spacing: -1px;
        padding: 18px 86px 18px 26px;
        color: $ui-kit-color-main-text;
        font-weight: 500;
    }

    @media (max-width: 1679px) {
        .link {
            font-size: 20px;
            padding: 15px 20px;
        }
    }
</style>
