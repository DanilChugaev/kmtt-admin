<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiIconSearch from '~/components/ui-kit/UiIcons/UiIconSearch.vue';

@Component({
    components: {
        UiIconSearch,
    },
})
export default class UiIconSearchCase extends Vue {}
</script>

<template lang="pug">
    .icon-container
        UiIconSearch(
            :size="100"
        )
        UiIconSearch(
            :size="50"
        )
        UiIconSearch

        p UiIconSearch
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
