<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import temp from './helpers/temp';
import UiButton from './components/ui-kit/UiButton/UiButton.vue';

@Component({
    components: {
        UiButton,
    },
})
export default class App extends Vue {
    // Data property
    myDataProperty: string = ''

    // Lifecycle hook
    mounted() {
        this.myDataProperty = 'Boop';
    }

    // Component method
    updateMyProperty($event: any) {
        this.myDataProperty = temp($event.target.value);
    }
}
</script>

<template lang="pug">
    div
        p {{ myDataProperty }}
        input(
            :value="myDataProperty"
            @input="updateMyProperty($event)"
        )
        UiButton Жмякни
</template>

<style lang="scss">
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
</style>
