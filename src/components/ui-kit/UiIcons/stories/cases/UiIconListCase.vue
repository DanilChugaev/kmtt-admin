<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiIconList from '~/components/ui-kit/UiIcons/UiIconList.vue';

@Component({
    components: {
        UiIconList,
    },
})
export default class UiIconListCase extends Vue {}
</script>

<template lang="pug">
    .icon-container
        UiIconList(
            :size="100"
        )
        UiIconList(
            :size="50"
        )
        UiIconList

        p UiIconList
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
