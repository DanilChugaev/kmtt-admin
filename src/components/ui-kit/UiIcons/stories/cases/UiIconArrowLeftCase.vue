<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiIconArrowLeft from '~/components/ui-kit/UiIcons/UiIconArrowLeft.vue';

@Component({
    components: {
        UiIconArrowLeft,
    },
})
export default class UiIconArrowLeftCase extends Vue {}
</script>

<template lang="pug">
    .icon-container
        UiIconArrowLeft(
            :size="100"
        )
        UiIconArrowLeft(
            :size="50"
        )
        UiIconArrowLeft

        p UiIconArrowLeft
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
