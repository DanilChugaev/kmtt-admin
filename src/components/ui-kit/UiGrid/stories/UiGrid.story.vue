<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import SimpleGridCase from './cases/SimpleGridCase.vue';
import SearchGridCase from './cases/SearchGridCase.vue';

@Component({
    components: {
        SimpleGridCase,
        SearchGridCase,
    },
})
export default class UiGridStories extends Vue {}
</script>

<template lang="pug">
    div
        SimpleGridCase.mb-20
        SearchGridCase.mb-20
</template>

<style lang="scss">
    @import '~/components/ui-kit/styles/storybook.scss';
</style>
