<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import TextLinkCase from './cases/TextLinkCase.vue';
import NumberLinkCase from './cases/NumberLinkCase.vue';
import IconLinkCase from './cases/IconLinkCase.vue';

@Component({
    components: {
        TextLinkCase,
        NumberLinkCase,
        IconLinkCase,
    },
})
export default class UiLinkStories extends Vue {}
</script>

<template lang="pug">
    div
        TextLinkCase.mb-20
        NumberLinkCase.mb-20
        IconLinkCase.mb-20
</template>

<style lang="scss">
    @import '~/components/ui-kit/styles/storybook.scss';
</style>
