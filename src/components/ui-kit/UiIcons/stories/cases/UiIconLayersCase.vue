<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiIconLayers from '~/components/ui-kit/UiIcons/UiIconLayers.vue';

@Component({
    components: {
        UiIconLayers,
    },
})
export default class UiIconLayersCase extends Vue {}
</script>

<template lang="pug">
    .icon-container
        UiIconLayers(
            :size="100"
        )
        UiIconLayers(
            :size="50"
        )
        UiIconLayers

        p UiIconLayers
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
