<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiIconMenu from '~/components/ui-kit/UiIcons/UiIconMenu.vue';

@Component({
    components: {
        UiIconMenu,
    },
})
export default class UiIconMenuCase extends Vue {}
</script>

<template lang="pug">
    .icon-container
        UiIconMenu(
            :size="100"
        )
        UiIconMenu(
            :size="50"
        )
        UiIconMenu

        p UiIconMenu
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
