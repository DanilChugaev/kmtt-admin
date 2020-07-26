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
export default class IconLinkCase extends Vue {}
</script>

<template lang="pug">
    UiLink(
        href="https://google.com"
        target="_blank"
        :hasDashed="false"
    )
        UiIconSettings(
            size="30"
            slot="icon"
        )
        | Ссылка c иконкой
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
