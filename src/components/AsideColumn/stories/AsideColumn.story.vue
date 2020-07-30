<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import SimpleAsideColumnCase from './cases/SimpleAsideColumnCase.vue';

@Component({
    components: {
        SimpleAsideColumnCase,
    },
})
export default class AsideColumnCaseStories extends Vue {}
</script>

<template lang="pug">
    .button-container
        SimpleAsideColumnCase.mb-20
</template>

<style lang="scss">
    @import '~/components/ui-kit/styles/storybook.scss';
</style>
