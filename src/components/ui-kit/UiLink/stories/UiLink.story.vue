<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import TextLinkCase from './cases/TextLinkCase.vue';
import NumberLinkCase from './cases/NumberLinkCase.vue';
import IconLinkCase from './cases/IconLinkCase.vue';
import SPALinkCase from './cases/SPALinkCase.vue';
import DynamicPropsLinkCase from './cases/DynamicPropsLinkCase.vue';

@Component({
    components: {
        TextLinkCase,
        NumberLinkCase,
        IconLinkCase,
        SPALinkCase,
        DynamicPropsLinkCase,
    },
})
export default class UiLinkStories extends Vue {}
</script>

<template lang="pug">
    div
        TextLinkCase.mb-20
        NumberLinkCase.mb-20
        IconLinkCase.mb-20
        SPALinkCase.mb-20
        DynamicPropsLinkCase.mb-20
</template>

<style lang="scss">
    @import '~/components/ui-kit/styles/storybook.scss';
</style>
