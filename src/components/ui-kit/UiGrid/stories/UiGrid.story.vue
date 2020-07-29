<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import SimpleGridCase from './cases/SimpleGridCase.vue';
import SearchGridCase from './cases/SearchGridCase.vue';
import LinkButtonGridCase from './cases/LinkButtonGridCase.vue';

@Component({
    components: {
        SimpleGridCase,
        SearchGridCase,
        LinkButtonGridCase,
    },
})
export default class UiGridStories extends Vue {}
</script>

<template lang="pug">
    div
        LinkButtonGridCase.mb-20
        SimpleGridCase.mb-20
        SearchGridCase.mb-20
</template>

<style lang="scss">
    @import '~/components/ui-kit/styles/storybook.scss';
</style>
