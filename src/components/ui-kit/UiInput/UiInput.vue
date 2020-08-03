<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Emit } from 'vue-property-decorator';

import UiButton from '~/components/ui-kit/UiButton/UiButton.vue';

import getDynamicProp from '~/helpers/getDynamicProp';

interface DynamicPropsInput {
    value?: string | number,
    placeholder?: string,
    type?: string,
}

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
     * Динамические пропсы
     * @type {DynamicPropsInput}
     */
    @Prop({
        default: undefined,
    }) readonly dynamicProps!: DynamicPropsInput;

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
        this.$emit('dynamicEvent', 'keyupEnter', event);
        return event;
    }

    /**
     * Обработчик нажатия на иконку
     * @param {any} event
     * @return {any}
     */
    @Emit('clickIcon')
    handleClickIcon(event: any) {
        this.$emit('dynamicEvent', {
            eventName: 'clickIcon',
            value: event,
        });
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
            this.$emit('dynamicEvent', {
                eventName: 'input',
                value: value.target.value,
            });
            return value.target.value;
        } else {
            this.$emit('dynamicEvent', {
                eventName: 'input',
                value: '',
            });
            return '';
        }
    }

    getDynamicProp: any = getDynamicProp
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
            :value="getDynamicProp(dynamicProps, value, 'value')"
            :type="getDynamicProp(dynamicProps, type, 'type')"
            :placeholder="getDynamicProp(dynamicProps, placeholder, 'placeholder')"
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

    .input {
        border: none;
        outline: none;
        width: 100%;
        font-size: 30px;
        letter-spacing: -0.5px;
        color: $ui-kit-color-placeholder-text;
        background-color: transparent;
    }

    .button {
        position: absolute;
        left: 3px;
        top: -1px;
        background-color: transparent !important;
        color: $ui-kit-color-placeholder-text;

        &:hover {
            background-color: transparent;
        }
    }

    @media (max-width: 1679px) {
        .input {
            font-size: 20px;
        }

        .button {
            &._has-icon {
                padding: 4px;
            }
        }
    }
</style>
