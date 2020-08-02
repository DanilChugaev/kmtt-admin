<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiInput from '~/components/ui-kit/UiInput/UiInput.vue';

@Component({
    components: {
        UiInput,
    },
})
export default class DynamicPropsInputCase extends Vue {
    /**
     * Динамическая пропса
     * @type {any}
     */
    dynamicProps: any = {
        placeholder: 'Динамическая пропса',
    }

    /**
     * На соответствующий ивент компонента реагируем заранее определенным действием
     *
     * @type {any}
     */
    dynamicEvent(event: any, item: any) {
        console.log(`eventName - ${event.eventName}, value - ${event.value}, item - ${item}`);
    }
}
</script>

<template lang="pug">
    .input-container
        UiInput(
            :dynamicProps="dynamicProps"
            @dynamicEvent="dynamicEvent($event, 'сюда можно передавать динамический компонент')"
        )
        | {{ dynamicProps.value }}
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
