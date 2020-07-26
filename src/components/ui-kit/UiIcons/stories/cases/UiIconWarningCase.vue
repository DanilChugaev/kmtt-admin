<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiIconWarning from '~/components/ui-kit/UiIcons/UiIconWarning.vue';

@Component({
    components: {
        UiIconWarning,
    },
})
export default class UiIconWarningCase extends Vue {}
</script>

<template lang="pug">
    .icon-container
        UiIconWarning(
            :size="100"
        )
        UiIconWarning(
            :size="50"
        )
        UiIconWarning

        p UiIconWarning
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
