<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiIconUser from '~/components/ui-kit/UiIcons/UiIconUser.vue';

@Component({
    components: {
        UiIconUser,
    },
})
export default class UiIconUserCase extends Vue {}
</script>

<template lang="pug">
    .icon-container
        UiIconUser(
            :size="100"
        )
        UiIconUser(
            :size="50"
        )
        UiIconUser

        p UiIconUser
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
