<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class UiButton extends Vue {
    /** Нативный атрибут type */
    @Prop({
        default: 'button',
        validator(value) {
            return ['button', 'submit'].includes(value);
        },
    }) readonly type!: string;

    /** Фон кнопки */
    @Prop({
        default: 'blue',
        validator(value) {
            return ['blue', 'green', 'red'].includes(value);
        },
    }) readonly background!: string;

    /** Заблокирована ли кнопка */
    @Prop({
        default: false,
    }) readonly disabled!: boolean;

    /**
     * Навешиваем классы состояний
     * @return {Array<string>}
     */
    get viewClass(): Array<string> {
        const result = [
            `_${this.background}`,
        ];

        if (this.disabled) {
            result.push('_disabled');
        }

        if (this.hasIconSlot) {
            result.push('_has-icon');
        }

        return result;
    }

    /**
     * Имеет ли кнопка содержимое в слоте icon
     * @return {boolean}
     */
    get hasIconSlot(): boolean {
        return Boolean(this.$slots.icon);
    }

    /**
     * Имеет ли кнопка содержимое в дефолтном слоте
     * @return {boolean}
     */
    get hasDefaultSlot(): boolean {
        return Boolean(this.$slots.default);
    }

    /** Обработчик нажатия на кнопку */
    @Emit()
    click(event: any) {
        return event;
    }
}
</script>

<template lang="pug">
    button.button(
        :type="type"
        :disabled="disabled"
        :class="viewClass"
        @click="click"
    )
        .icon(v-if="hasIconSlot")
            slot(name="icon")
        span.text(v-if="hasDefaultSlot")
            slot
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/variables.scss';
    @import '~/components/ui-kit/styles/color.scss';
    @import '~/components/ui-kit/styles/shadow.scss';
    @import '~/components/ui-kit/styles/typography.scss';

    .button {
        @include ui-kit-typography;

        font-size: 27px;
        letter-spacing: 0.6px;
        line-height: 1.2;
        color: $ui-kit-color-white;
        padding: 24px 41px;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 24px;

        &:active {
            transform: scale(0.99);
        }

        &._blue {
            $color: $ui-kit-color-blue;
            background-color: $color;
            @include ui-kit-button-shadow($color);

            &:hover {
                background-color: rgba($color, 0.8);
            }
        }

        &._green {
            $color: $ui-kit-color-green;
            background-color: $color;
            @include ui-kit-button-shadow($color);

            &:hover {
                background-color: rgba($color, 0.8);
            }
        }

        &._red {
            $color: $ui-kit-color-red;
            background-color: $color;
            @include ui-kit-button-shadow($color);

            &:hover {
                background-color: rgba($color, 0.8);
            }
        }

        &._disabled {
            @include ui-kit-disable-interactive;
            background-color: $ui-kit-color-light-gray;
            box-shadow: none;
        }

        &._has-icon {
            padding: 10px;
            border-radius: 50%;
            box-shadow: none;

            .icon {
                display: flex;
            }
        }
    }

    @media (max-width: 1679px) {
        .button {
            font-size: 20px;
            padding: 17px 25px;
        }
    }
</style>
