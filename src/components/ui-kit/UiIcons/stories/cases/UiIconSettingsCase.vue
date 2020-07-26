<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiIconSettings from '~/components/ui-kit/UiIcons/UiIconSettings.vue';

@Component({
    components: {
        UiIconSettings,
    },
})
export default class UiIconSettingsCase extends Vue {}
</script>

<template lang="pug">
    .icon-container
        UiIconSettings(
            :size="100"
        )
        UiIconSettings(
            :size="50"
        )
        UiIconSettings

        p UiIconSettings
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
