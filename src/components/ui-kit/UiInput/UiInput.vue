<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Emit } from 'vue-property-decorator';

import UiButton from '~/components/ui-kit/UiButton/UiButton.vue';

@Component({
    components: {
        UiButton,
    },
})
export default class UiInput extends Vue {
    /**
     * Значение инпута
     * @type {String|Number}
     */
    @Prop({
        default: '',
    }) readonly value!: string | number;

    /**
     * Нативный placeholder
     * @type {String}
     */
    @Prop({
        default: '',
    }) readonly placeholder!: string;

    /**
     * Нативный type
     * @type {String}
     */
    @Prop({
        default: 'text',
    }) readonly type!: string;

    /**
     * Имеет ли кнопка содержимое в слоте icon
     * @return {boolean}
     */
    get hasIconSlot(): boolean {
        return Boolean(this.$slots.icon);
    }

    /**
     * Навешиваем классы состояний
     * @return {Array<string>}
     */
    get viewClass(): Array<string> {
        const result = [];

        if (this.hasIconSlot) {
            result.push('_has-icon');
        }

        return result;
    }

    /** Очищение значения инпута при нажатии на Esc */
    handleKeyupEsc(): void {
        this.handleInput('');
    }

    /**
     * Обработчик нажатия на клавишу Enter
     * @param {any} event
     * @return {any}
     */
    @Emit('keyupEnter')
    handleKeyupEnter(event: any) {
        return event;
    }

    /**
     * Обработчик нажатия на иконку
     * @param {any} event
     * @return {any}
     */
    @Emit('clickIcon')
    handleClickIcon(event: any) {
        return event;
    }

    /**
     * Передача значения инпута предку
     * @param {string} value - значение инпута
     * @return {string}
     */
    @Emit('input')
    handleInput(value: any): string {
        if (value && value.target) {
            return value.target.value;
        } else {
            return '';
        }
    }
}
</script>

<template lang="pug">
    .input-container(
        :class="viewClass"
    )
        UiButton.button(
            v-if="hasIconSlot"
            @click="handleClickIcon"
        )
            slot(
                name="icon"
                slot="icon"
            )

        input.input(
            :value="value"
            :type="type"
            :placeholder="placeholder"
            @input="handleInput"
            @keyup.enter="handleKeyupEnter"
            @keyup.esc="handleKeyupEsc"
        )
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
    @import '~/components/ui-kit/styles/typography.scss';

    .input-container {
        @include ui-kit-typography;

        display: flex;
        position: relative;
        width: 100%;
        border-radius: 25px;
        border: 2px solid $ui-kit-color-border;
        overflow: hidden;
        box-sizing: border-box;
        padding: 5px 15px;

        &._has-icon {
            padding-left: 50px;
        }
    }

    .input {
        border: none;
        outline: none;
        width: 100%;
        font-size: 30px;
        letter-spacing: -0.5px;
        color: $ui-kit-color-placeholder-text;

        ::placeholder {
            color: $ui-kit-color-placeholder-text;
            opacity: 1;
        }

        :-ms-input-placeholder {
            color: $ui-kit-color-placeholder-text;
        }

        ::-ms-input-placeholder {
            color: $ui-kit-color-placeholder-text;
        }
    }

    .button {
        position: absolute;
        left: 3px;
        top: -1px;
        background-color: transparent;
        color: $ui-kit-color-placeholder-text;

        &:hover {
            background-color: transparent;
        }
    }
</style>
