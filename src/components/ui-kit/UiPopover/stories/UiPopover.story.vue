<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import SimplePopoverCase from './cases/SimplePopoverCase.vue';

@Component({
    components: {
        SimplePopoverCase,
    },
})
export default class UiPopoverStories extends Vue {}
</script>

<template lang="pug">
    div
        SimplePopoverCase.mb-20
</template>

<style lang="scss">
    @import '~/components/ui-kit/styles/storybook.scss';
</style>
