<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiIconChevronDown from '~/components/ui-kit/UiIcons/UiIconChevronDown.vue';

@Component({
    components: {
        UiIconChevronDown,
    },
})
export default class UiIconChevronDownCase extends Vue {}
</script>

<template lang="pug">
    .icon-container
        UiIconChevronDown(
            :size="100"
        )
        UiIconChevronDown(
            :size="50"
        )
        UiIconChevronDown

        p UiIconChevronDown
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
