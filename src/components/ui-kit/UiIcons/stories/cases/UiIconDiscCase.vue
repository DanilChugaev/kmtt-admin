<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiIconDisc from '~/components/ui-kit/UiIcons/UiIconDisc.vue';

@Component({
    components: {
        UiIconDisc,
    },
})
export default class UiIconDiscCase extends Vue {}
</script>

<template lang="pug">
    .icon-container
        UiIconDisc(
            :size="100"
        )
        UiIconDisc(
            :size="50"
        )
        UiIconDisc

        p UiIconDisc
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
