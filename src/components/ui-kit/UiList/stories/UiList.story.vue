<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import SimpleLinkCase from './cases/SimpleLinkCase.vue';
import IconInLinkCase from './cases/IconInLinkCase.vue';
import UrlInLinkCase from './cases/UrlInLinkCase.vue';

@Component({
    components: {
        SimpleLinkCase,
        IconInLinkCase,
        UrlInLinkCase,
    },
})
export default class UiListStories extends Vue {}
</script>

<template lang="pug">
    div
        SimpleLinkCase.mb-20
        IconInLinkCase.mb-20
        UrlInLinkCase.mb-20
</template>

<style lang="scss">
    @import '~/components/ui-kit/styles/storybook.scss';
</style>
