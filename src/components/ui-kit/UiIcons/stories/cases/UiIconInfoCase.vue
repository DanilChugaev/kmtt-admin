<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiIconInfo from '~/components/ui-kit/UiIcons/UiIconInfo.vue';

@Component({
    components: {
        UiIconInfo,
    },
})
export default class UiIconInfoCase extends Vue {}
</script>

<template lang="pug">
    .icon-container
        UiIconInfo(
            :size="100"
        )
        UiIconInfo(
            :size="50"
        )
        UiIconInfo

        p UiIconInfo
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
