<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiInput from '~/components/ui-kit/UiInput/UiInput.vue';

@Component({
    components: {
        UiInput,
    },
})
export default class SimpleInputCase extends Vue {
    value: string = ''
}
</script>

<template lang="pug">
    .input-container
        UiInput(
            v-model="value"
            placeholder="Поиск"
        )
        | {{ value }}
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
