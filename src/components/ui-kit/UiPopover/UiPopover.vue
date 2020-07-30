<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class UiPopover extends Vue {
    /**
     * Растягивать ли попап на всю ширину
     * @type {boolean}
     */
    @Prop({
        default: false,
    }) readonly isFullWidth!: boolean;

    /**
     * Виден ли попап
     * @type {boolean}
     */
    isVisible: boolean = false

    /**
     * Навешиваем классы состояний
     * @return {Array<string>}
     */
    get viewClass(): Array<string> {
        const result = [];

        if (this.isFullWidth) {
            result.push('_is-full-width');
        }

        return result;
    }
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
            :class="viewClass"
        )
            slot
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
    @import '~/components/ui-kit/styles/shadow.scss';

    .popover-container,
    .activator {
        display: flex;
        justify-content: center;
        width: 100%;
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
        right: 68px;
        z-index: 10;
        border: 2px solid $ui-kit-color-border;
        border-radius: 10px;
        overflow: hidden;

        &._is-full-width {
            top: calc(100% + 22px);
            right: -12px;
            left: -12px;
        }
    }
</style>
