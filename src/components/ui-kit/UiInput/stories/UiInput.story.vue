<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import SimpleInputCase from './cases/SimpleInputCase.vue';
import IconInputCase from './cases/IconInputCase.vue';

@Component({
    components: {
        SimpleInputCase,
        IconInputCase,
    },
})
export default class UiInputStories extends Vue {}
</script>

<template lang="pug">
    div
        SimpleInputCase.mb-20
        IconInputCase.mb-20
</template>

<style lang="scss">
    @import '~/components/ui-kit/styles/storybook.scss';

    .input-container {
        width: 410px;
    }
</style>
