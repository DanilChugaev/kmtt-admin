<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import UiInput from '~/components/ui-kit/UiInput/UiInput.vue';
import UiIconSearch from '~/components/ui-kit/UiIcons/UiIconSearch.vue';

@Component({
    components: {
        UiInput,
        UiIconSearch,
    },
})
export default class IconInputCase extends Vue {
    value: string = ''

    keyupEnter() {
        console.log('keyupEnter');
    }

    clickIcon() {
        console.log('clickIcon');
    }
}
</script>

<template lang="pug">
    .input-container
        UiInput(
            v-model="value"
            placeholder="Поиск"
            @keyupEnter="keyupEnter"
            @clickIcon="clickIcon"
        )
            UiIconSearch(
                slot="icon"
                :size="28"
            )
        | {{ value }}
</template>

<style lang="scss" scoped>
    @import '~/components/ui-kit/styles/color.scss';
</style>
