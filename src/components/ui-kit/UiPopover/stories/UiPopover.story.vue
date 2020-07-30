<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import SimplePopoverCase from './cases/SimplePopoverCase.vue';
import FullWidthPopoverCase from './cases/FullWidthPopoverCase.vue';

@Component({
    components: {
        SimplePopoverCase,
        FullWidthPopoverCase,
    },
})
export default class UiPopoverStories extends Vue {}
</script>

<template lang="pug">
    .popovers
        SimplePopoverCase.mb-20
        FullWidthPopoverCase.mb-20
</template>

<style lang="scss">
    @import '~/components/ui-kit/styles/storybook.scss';

    .popovers {
        display: flex;
    }
</style>
