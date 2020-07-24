<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Emit } from 'vue-property-decorator';

    @Component
export default class UiLink extends Vue {
        /**
         * Нативный атрибут href
         * @type {String}
         */
        @Prop({
            default: '',
        }) readonly href!: string;

        /**
         * Нативный атрибут target
         * @type {String}
         */
        @Prop({
            default: '',
        }) readonly target!: string;

        /**
         * Нативный атрибут rel
         * @type {String}
         */
        @Prop({
            default: '',
        }) readonly rel!: string;

        /**
         * Есть ли подчеркивание у ссылки
         * @type {boolean}
         */
        @Prop({
            default: true,
        }) readonly hasDashed!: boolean;

        /**
         * Навешиваем классы состояний
         * @return {Array<string>}
         */
        get viewClass(): Array<string> {
            const result = [];

            if (this.hasDashed) {
                result.push('_had-dashed');
            }

            /** Если есть слот с иконкой, то на ссылку навешиваем класс с другими отступами */
            if (this.hasIconSlot && this.hasDefaultSlot) {
                result.push('_text-with-icon');
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

        /**
         * Обработчик нажатия на ссылку
         * @param {any} event
         * @return {any}
         */
        @Emit()
        click(event: any) {
            return event;
        }
}
</script>

<template lang="pug">
    a.link(
        :href="href"
        :target="target"
        :class="viewClass"
        @click="click"
    )
        .icon(v-if="hasIconSlot")
            slot(name="icon")
        .content(v-if="hasDefaultSlot")
            slot
</template>

<style lang="scss" scoped>
    @import '../styles/color.scss';
    @import '../styles/typography.scss';
    @import '../styles/animation.scss';

    .link {
        @include ui-kit-color-animation;
        @include ui-kit-typography;

        font-size: 30px;
        letter-spacing: -1.5px;
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        color: $ui-kit-color-dark-blue;

        &:hover {
            color: $ui-kit-color-blue;
        }

        .icon {
            display: flex;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
        }

        &._had-dashed {
            .content {
                @include ui-kit-border-animation;

                border-bottom: 2px dashed $ui-kit-color-dark-blue;
            }

            &:hover {
                color: $ui-kit-color-blue;

                .content {
                    border-bottom: 2px dashed transparent;
                }
            }
        }

        &._text-with-icon {
            padding-left: 60px;
        }
    }
</style>