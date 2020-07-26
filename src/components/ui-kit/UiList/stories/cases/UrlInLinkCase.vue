<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiList from '~/components/ui-kit/UiList/UiList.vue';

import UiLink from '~/components/ui-kit/UiLink/UiLink.vue';
import UiIconSettings from '~/components/ui-kit/UiIcons/UiIconSettings.vue';
import UiIconMenu from '~/components/ui-kit/UiIcons/UiIconMenu.vue';
import UiIconWarning from '~/components/ui-kit/UiIcons/UiIconWarning.vue';

import ListItem from "~/interfaces/ListItem.ts";

@Component({
    components: {
        UiList,
        UiLink,
        UiIconSettings,
        UiIconMenu,
        UiIconWarning,
    },
})
export default class UrlInLinkCase extends Vue {
    items: Array<ListItem> = [
        {
            name: 'Доступные города',
            url: '/available-cities',
        },
        {
            name: 'Заблокированные пользователи',
            url: '/blocked-users',
        },
        {
            name: 'Черный список ссылок',
            url: '/blacklist-links',
        },
        {
            name: 'Управление пользователями',
            url: '/user-management',
        },
    ]

    /**
     * Тут вызываем ранее написанные на фронте функции, которые могут быть вызваны из конфига
     * @param {ListItem} item - элемент списка
     * */
    callMethod(item: ListItem): void {
        if (item.method) {
            console.log(`Этот иф не вызовется, т.к. не указан метод`);
        }
    }
}
</script>

<template lang="pug">
    div
        p Cписок со ссылками на другие страницы.

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
                    :size="item.iconSize || 30"
                    :is="item.icon"
                )
                | {{ item.name }}
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';

    .link {
        font-size: 28px;
        letter-spacing: 1.1px;
        padding: 15px 40px;
        color: $ui-kit-color-main-text;
        font-weight: 500;
    }
</style>
