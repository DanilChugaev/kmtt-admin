<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiLink from '~/components/ui-kit/UiLink/UiLink.vue';

@Component({
    components: {
        UiLink,
    },
})
export default class TextLinkCase extends Vue {}
</script>

<template lang="pug">
    UiLink(
        href="https://google.com"
        target="_blank"
    ) Простая ссылка
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
