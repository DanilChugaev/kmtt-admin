<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class UiPopover extends Vue {
    /**
     * Виден ли попап
     * @type {boolean}
     */
    isVisible: boolean = false
}
</script>

<template lang="pug">
    .popover-container
        .activator(
            @click="isVisible = !isVisible"
        )
            slot(name="activator")

        .popover(
            v-show="isVisible"
        )
            slot
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
    @import '~/components/ui-kit/styles/shadow.scss';

    .popover-container,
    .activator {
        display: inline-block;
    }

    .activator {
        cursor: pointer;
    }

    .popover-container {
        position: relative;
    }

    .popover {
        @include ui-kit-popover-shadow($ui-kit-color-shadow-popover);

        position: absolute;
        top: 100%;
        right: -42px;
        z-index: 10;
        border: 2px solid $ui-kit-color-border;
        border-radius: 10px;
        overflow: hidden;
    }
</style>
