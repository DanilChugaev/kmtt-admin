<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiPopover from '~/components/ui-kit/UiPopover/UiPopover.vue';
import UiList from '~/components/ui-kit/UiList/UiList.vue';
import UiLink from '~/components/ui-kit/UiLink/UiLink.vue';
import UiIconAction from '~/components/ui-kit/UiIcons/UiIconAction.vue';

import ListItem from '~/interfaces/ListItem.ts';

@Component({
    components: {
        UiPopover,
        UiList,
        UiLink,
        UiIconAction,
    },
})
export default class SimplePopoverCase extends Vue {
    /**
     * Элементы списка для компонента UiList
     * @type {Array<ListItem>}
     */
    items: Array<ListItem> = [
        {
            name: 'Удалить',
            method: 'remove',
            params: {
                id: '121221',
            },
        },
        {
            name: 'Редактировать',
            method: 'edit',
            params: {
                id: '121221',
            },
        },
        {
            name: 'Забанить',
            method: 'ban',
            params: {
                id: '121221',
                type: '121221',
            },
        },
    ]

    /**
     * Тут вызываем ранее написанные на фронте функции, которые могут быть вызваны из конфига
     * @param {ListItem} item - элемент списка
     */
    callMethod(item: ListItem): void {
        if (item.method) {
            console.log(`Вызываем метод ${item.method} c параметрами: ${Object.keys(item.params)}`);
        }
    }
}
</script>

<template lang="pug">
    .popover-example
        UiPopover(
            :isFullWidth="true"
        )
            .full-width-activator(
                slot="activator"
            )
                | Просто какой-то текст с иконкой
                UiIconAction(
                    :size="48"
                )

            UiList(
                v-slot="{ item }"
                :items="items"
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

    .popover-example {
        padding: 0 200px;
        width: 300px;
    }

    .link {
        font-size: 28px;
        letter-spacing: -1px;
        padding: 18px 86px 18px 26px;
        color: $ui-kit-color-main-text;
        font-weight: 500;
    }

    .full-width-activator {
        display: flex;
        align-items: center;
        color: $ui-kit-color-green;
    }
</style>
