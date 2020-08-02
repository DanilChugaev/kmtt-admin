<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiLink from '~/components/ui-kit/UiLink/UiLink.vue';

@Component({
    components: {
        UiLink,
    },
})
export default class DynamicPropsLinkCase extends Vue {
    /**
     * Динамическая пропса
     * @type {any}
     */
    dynamicProps: any = {
        href: "https://google.com",
        target: "_blank",
    }
}
</script>

<template lang="pug">
    UiLink(
        :dynamicProps="dynamicProps"
    ) Cсылка c динамической пропсой
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
