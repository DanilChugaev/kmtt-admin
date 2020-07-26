<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiList from '../../UiList.vue';

import UiLink from '../../../UiLink/UiLink.vue';

import ListItem from '../../../../../interfaces/ListItem.ts';

@Component({
    components: {
        UiList,
        UiLink,
    },
})
export default class SimpleLinkCase extends Vue {
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
     * */
    callMethod(item: ListItem): void {
        if (item.method) {
            console.log(`Вызываем метод ${item.method} c параметрами: ${Object.keys(item.params)}`);
        }
    }
}
</script>

<template lang="pug">
    div
        p Простой список без иконок и с указанием метода, который вызывается при нажатии на элемент списка.

        UiList(
            v-slot="{ item }"
            :items="items"
        )
            UiLink.link(
                :href="item.url"
                :hasDashed="false"
                @click="callMethod(item)"
            )
                component(
                    v-if="item.icon"
                    slot="icon"
                    size="30"
                    :is="item.icon"
                )
                | {{ item.name }}
</template>

<style lang="scss" scoped>
    @import '../../../styles/color.scss';

    .link {
        font-size: 28px;
        letter-spacing: -1px;
        padding: 18px 26px;
        color: $ui-kit-color-main-text;
        font-weight: 500;
    }
</style>
