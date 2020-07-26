<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiButton from '~/components/ui-kit/UiButton/UiButton.vue';

@Component({
    components: {
        UiButton,
    },
})
export default class SimpleButtonCase extends Vue {}
</script>

<template lang="pug">
    UiButton Добавить пользователя
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
