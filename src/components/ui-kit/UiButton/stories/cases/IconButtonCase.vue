<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiButton from '~/components/ui-kit/UiButton/UiButton.vue';
import UiIconSearch from '~/components/ui-kit/UiIcons/UiIconSearch.vue';

@Component({
    components: {
        UiButton,
        UiIconSearch,
    },
})
export default class IconButtonCase extends Vue {}
</script>

<template lang="pug">
    .buttons
        UiButton
            UiIconSearch(
                slot="icon"
                :size="100"
            )
        UiButton.green-button
            UiIconSearch(
                slot="icon"
                :size="50"
            )
        UiButton.transparent-button
            UiIconSearch(
                slot="icon"
            )

        p Кнопки в виде иконок
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';

    .buttons {
        display: flex;
        align-items: flex-end;
    }

    .green-button {
        background-color: $ui-kit-color-green !important;
    }

    .transparent-button {
        background-color: transparent !important;
        color: $ui-kit-color-light-gray;
    }
</style>
