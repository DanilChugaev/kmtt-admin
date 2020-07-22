<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
    @Prop([String]) readonly text!: string;

    buttonText: string = 'просто кнопка';

    get buttonTextComputed() {
        return this.text ? this.text : this.buttonText;
    }
}
</script>

<template lang="pug">
    .button-container
        button.button
            slot
</template>

<style lang="scss">
    .button {
        width: 200px;
    }
</style>
