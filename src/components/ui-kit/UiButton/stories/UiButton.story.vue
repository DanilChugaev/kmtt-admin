<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import SimpleButtonCase from './cases/SimpleButtonCase.vue';
import DisabledButtonCase from './cases/DisabledButtonCase.vue';
import GreenButtonCase from './cases/GreenButtonCase.vue';
import RedButtonCase from './cases/RedButtonCase.vue';

@Component({
    components: {
        SimpleButtonCase,
        DisabledButtonCase,
        GreenButtonCase,
        RedButtonCase,
    },
})
export default class UiButtonStories extends Vue {}
</script>

<template lang="pug">
    .button-container
        SimpleButtonCase.mb-20
        DisabledButtonCase.mb-20
        GreenButtonCase.mb-20
        RedButtonCase.mb-20
</template>

<style lang="scss">
    @import '~/components/ui-kit/styles/storybook.scss';

    .button-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
</style>
