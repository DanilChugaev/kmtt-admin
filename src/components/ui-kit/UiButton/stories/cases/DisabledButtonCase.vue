<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiButton from '~/components/ui-kit/UiButton/UiButton.vue';

@Component({
    components: {
        UiButton,
    },
})
export default class DisabledButtonCase extends Vue {}
</script>

<template lang="pug">
    UiButton(:disabled="true") Кнопка заблокирована
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
