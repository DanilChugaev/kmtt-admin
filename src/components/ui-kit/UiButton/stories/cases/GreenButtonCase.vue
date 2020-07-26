<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiButton from '~/components/ui-kit/UiButton/UiButton.vue';

@Component({
    components: {
        UiButton,
    },
})
export default class GreenButtonCase extends Vue {}
</script>

<template lang="pug">
    UiButton(background="green") Подтвердить
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
