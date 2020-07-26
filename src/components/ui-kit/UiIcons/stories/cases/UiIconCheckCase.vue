<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiIconCheck from '~/components/ui-kit/UiIcons/UiIconCheck.vue';

@Component({
    components: {
        UiIconCheck,
    },
})
export default class UiIconCheckCase extends Vue {}
</script>

<template lang="pug">
    .icon-container
        UiIconCheck(
            :size="100"
        )
        UiIconCheck(
            :size="50"
        )
        UiIconCheck

        p UiIconCheck
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
