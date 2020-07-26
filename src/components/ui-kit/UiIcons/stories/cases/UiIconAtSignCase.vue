<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiIconAtSign from '~/components/ui-kit/UiIcons/UiIconAtSign.vue';

@Component({
    components: {
        UiIconAtSign,
    },
})
export default class UiIconAtSignCase extends Vue {}
</script>

<template lang="pug">
    .icon-container
        UiIconAtSign(
            :size="100"
        )
        UiIconAtSign(
            :size="50"
        )
        UiIconAtSign

        p UiIconAtSign
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
