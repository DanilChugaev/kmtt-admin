<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiIconAction from '~/components/ui-kit/UiIcons/UiIconAction.vue';

@Component({
    components: {
        UiIconAction,
    },
})
export default class UiIconActionCase extends Vue {}
</script>

<template lang="pug">
    .icon-container
        UiIconAction(
            :size="100"
        )
        UiIconAction(
            :size="50"
        )
        UiIconAction

        p UiIconAction
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
