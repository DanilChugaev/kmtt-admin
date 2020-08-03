<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiLink from '~/components/ui-kit/UiLink/UiLink.vue';

import UiIconSettings from '~/components/ui-kit/UiIcons/UiIconSettings.vue';

@Component({
    components: {
        UiLink,
        UiIconSettings,
    },
})
export default class IconPositionLinkCase extends Vue {}
</script>

<template lang="pug">
    UiLink(
        href="https://google.com"
        target="_blank"
        :hasDashed="false"
        :iconPositionLeft="40"
    )
        UiIconSettings(
            size="30"
            slot="icon"
        )
        | Ссылка c явно спозиционированной иконкой
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
