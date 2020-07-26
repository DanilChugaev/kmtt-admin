<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import UiLink from '~/components/ui-kit/UiLink/UiLink.vue';

import ListItem from '~/interfaces/ListItem';

@Component({
    components: {
        UiLink,
    },
})
export default class UiList extends Vue {
    /**
     * Элементы списка
     * @type {Array<ListItem>}
     */
    @Prop({
        required: true,
    }) readonly items!: Array<ListItem>;
}
</script>

<template lang="pug">
    ul.list
        li.item(
            v-for="item in items"
            :key="item.id"
        )
            slot(
                :item="item"
            )
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';

    .list {
        padding: 10px 0;
        margin: 0;
        background-color: $ui-kit-color-background;
    }

    .item {
        list-style: none;

        &:hover {
            background-color: $ui-kit-color-background-hover;
        }
    }
</style>
