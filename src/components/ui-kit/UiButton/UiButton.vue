<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
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

    /** Навешиваем классы состояний */
    get viewClass(): Array<string> {
        const result = [
            `_${this.background}`,
        ];

        if (this.disabled) {
            result.push('_disabled');
        }

        return result;
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
        slot
</template>

<style lang="scss">
    @import '../styles/variables.scss';
    @import '../styles/color.scss';
    @import '../styles/shadow.scss';

    .button {
        font-family: Arial, sans-serif;
        font-size: 27px;
        letter-spacing: 1.1px;
        line-height: 1.2;
        color: $ui-kit-color-white;
        padding: 24px 40px;
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
    }
</style>
